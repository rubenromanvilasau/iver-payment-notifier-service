const itemService = require('./services/item.service');
const { sendEmail } = require('./utils/send-email');

const main = async( minutesAgo ) => {
    const date = new Date();
    date.setMinutes( new Date().getMinutes() - minutesAgo )

    console.log('Searching items with ends_at greather than: ', date)

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

    //generate a link to pay
    await sendEmail({ to: 'ruben.roman@mayor.cl', subject: 'YOU WON THE AUCTION', html: `<h1>YOU WON, time to pay</h1>` });

};

main( 35 );