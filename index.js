const { format } = require('date-fns');
const itemService = require('./services/item.service');
const { sendEmail } = require('./utils/send-email');
const fs = require('fs');
const {v1: uuidv1} = require('uuid');

const main = async( minutesAgo ) => {
    const date = new Date();
    date.setMinutes( new Date().getMinutes() - minutesAgo )

    console.log('Searching items with ends_at greather than: ', format(date, 'dd-MM-yyyy HH:mm:ss'));

    const items = await itemService.getByEndsAtGreaterThan( date )
                    .catch( err => console.error(err) )

    if( items.length === 0 ) {
        console.log('No items found');
        return;
    };

    console.log(`Items that ended after ${ date } :`, items);

    for( let item of items ) {
        if( item.offers.length > 0 ) {
            console.log('Item has offers:', item.offers);
            const winner = item.offers[0];
            console.log(`Winner for item with id=${item.item_id}:`, winner.user);
        }
    }

    const templatePath = './templates/auction-winner.html';
    const template = fs.readFileSync( templatePath, 'utf8' );
    
    //TODO HERE SHOULD BE INCLUDED THE LINK TO PAY, IN THE TEMPLATE, THAT LINK MUST BE THE CHECKOUT PAGE FIRST, THEN MERCADO PAGO VIEW.
    // const emailData = { 
    //     to: 'ruben.roman@mayor.cl', 
    //     subject: 'YOU WON THE AUCTION', 
    //     html: template,
    // };
    // await sendEmail( emailData );

};


const minutesAgo = 120; // Minutes items ended after
main( minutesAgo );