var db = require("../models");

module.exports = function (app)
{
    // GET route for getting all of the bookings
    app.get("/api/colors", function (req, res) {
        db.colors.findAll({
            //include: [db.room,db.guest]
            })
            .then(function (dbColors) {
                res.json(dbColors);
            }).catch(function (err) {
                res.json('{"Error":"Coud not find stuff"}' + err);
            });
    });

    //route for posting a new color
    app.post("/api/colors", function (req, res) {
        console.log(req.body);
        db.colors.create(req.body)
            .then(function (dbColors)
            {
                res.json(dbColors);
            });
    });

    // DELETE route for deleting a color
    app.delete("/api/colors/:id", function (req, res) {
        db.booking.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbColors) {
                res.json(dbColors);
            });
    });

        //route for getting a single color???
        app.get("/api/colors/:id", function (req, res) {
            db.booking.findOne({
                    where: {
                        id: req.params.id
                    }
                    //,include: [db.rooms]
                })
                .then(function (dbColors) {
                    res.json(dbColors);
                });
        });
    

//     // PUT route for updating bookings
//     app.put("/api/bookings", function (req, res) {
//         db.booking.update(req.body, {
//                 where: {
//                     id: req.body.id
//                 }
//             })
//             .then(function (dbBooking) {
//                 res.json(dbBooking);
//             });
//     });

// // Get route for retrieving a single booking
// app.get("/api/availablerooms/:checkInDate/:checkOutDate/:room_type", function (req, res)
// {
//     console.log(req.body)

//     db.sequelize.query("SELECT rooms.id FROM hotelexpress_db.rooms Left Outer Join bookings ON rooms.id = bookings.id WHERE room_type = :room_type AND rooms.id Not IN(SELECT roomid FROM bookings WHERE (CheckInDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate)-1) ) AND (checkOutDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate)))) LIMIT 1;",
//         { replacements: {checkInDate: req.params.checkInDate, checkOutDate: req.params.checkOutDate, room_type: req.params.room_type}, type: db.sequelize.QueryTypes.SELECT }
//     ).then(function(room)
//     {
//         console.log(room);
//         res.json(room);
//     });
// });

//     // app.get("/api/colors", function (req, res) {
//     //     sequelize.query("SELECT roomid FROM bookings WHERE (CheckInDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate)-1) ) AND (checkOutDate BETWEEN DATE(:checkInDate) AND (DATE(:checkOutDate))) LIMIT 1;", {
//     //         replacements: req.body,
//     //         type: sequelize.QueryTypes.SELECT
//     //     }).then(room => {
//     //         console.log(room);
//     //         res.json(room);
//     //     });
//     // });

};




