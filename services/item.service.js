const { prisma } = require('../db');
 
class ItemService {
    getByEndsAtGreaterThan( date ) {
        return prisma.Item.findMany({
            where: {
                ends_at: {
                    gt: date,
                },
            },
            include: {
                offers: {
                    orderBy: {
                        amount: 'desc',
                    },
                    include: {
                        user: true,
                    },
                },
            }
        });
    }
};

module.exports = new ItemService();