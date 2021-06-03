const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/employeeDb"
);

const empSeed = [
    {
        "first_name": "Mario",
        "last_name": "Mertz",
        "username": "mario.mertz",
        "email": "mario.mertz@email.com",
        "avatar": "https://robohash.org/fugitutamet.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+1-649 1-898-207-2633",
        "date_of_birth": "1967-10-09",
        "title": "Human Consulting Designer",
    },
    {
        "first_name": "Mechelle",
        "last_name": "Brown",
        "username": "mechelle.brown",
        "email": "mechelle.brown@email.com",
        "avatar": "https://robohash.org/similiquenihiloptio.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+95 440.769.7333 x43389",
        "date_of_birth": "1993-10-14",
        "title": "Design Designer",

    },
    {
        "first_name": "Herman",
        "last_name": "Schuppe",
        "username": "herman.schuppe",
        "email": "herman.schuppe@email.com",
        "avatar": "https://robohash.org/explicaboquaeratsapiente.png?size=300x300&set=set1",
        "gender": "Genderfluid",
        "phone_number": "+993 618-105-7374",
        "date_of_birth": "1992-03-13",
        "title": "Technology Executive",

    },
    {
        "first_name": "Rebbecca",
        "last_name": "Paucek",
        "username": "rebbecca.paucek",
        "email": "rebbecca.paucek@email.com",
        "avatar": "https://robohash.org/etimpediteius.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+965 1-485-556-7005 x8968",
        "date_of_birth": "1971-01-13",
        "title": "Design Assistant",

    },
    {
        "first_name": "Lupe",
        "last_name": "Breitenberg",
        "username": "lupe.breitenberg",
        "email": "lupe.breitenberg@email.com",
        "avatar": "https://robohash.org/suntenimlaboriosam.png?size=300x300&set=set1",
        "gender": "Genderfluid",
        "phone_number": "+356 635-904-1758 x2372",
        "date_of_birth": "1975-04-21",
        "title": "Forward Education Agent",

    },
    {
        "first_name": "Silva",
        "last_name": "Tromp",
        "username": "silva.tromp",
        "email": "silva.tromp@email.com",
        "avatar": "https://robohash.org/nihiletsuscipit.png?size=300x300&set=set1",
        "gender": "Agender",
        "phone_number": "+1-787 (563) 110-7703 x48439",
        "date_of_birth": "1997-08-20",
        "title": "District Design Administrator",
    },
    {
        "first_name": "Melonie",
        "last_name": "Rohan",
        "username": "melonie.rohan",
        "email": "melonie.rohan@email.com",
        "avatar": "https://robohash.org/etaliasvoluptatibus.png?size=300x300&set=set1",
        "gender": "Polygender",
        "phone_number": "+27 (526) 798-6844 x54306",
        "date_of_birth": "1974-07-21",
        "title": "Marketing Facilitator",
    },
    {
        "first_name": "Mira",
        "last_name": "Medhurst",
        "username": "mira.medhurst",
        "email": "mira.medhurst@email.com",
        "avatar": "https://robohash.org/etoptiout.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+683 1-786-786-7708 x607",
        "date_of_birth": "1999-12-13",
        "title": "Principal Healthcare Consultant",
    },
    {
        "first_name": "Danny",
        "last_name": "Kilback",
        "username": "danny.kilback",
        "email": "danny.kilback@email.com",
        "avatar": "https://robohash.org/cupiditatequiaofficiis.png?size=300x300&set=set1",
        "gender": "Male",
        "phone_number": "+357 1-484-583-9307 x002",
        "date_of_birth": "1993-10-22",
        "title": "Administration Officer",
    },
    {
        "first_name": "Jimmy",
        "last_name": "Dach",
        "username": "jimmy.dach",
        "email": "jimmy.dach@email.com",
        "avatar": "https://robohash.org/corruptieteligendi.png?size=300x300&set=set1",
        "gender": "Male",
        "phone_number": "+257 1-567-155-1269 x60505",
        "date_of_birth": "1960-01-08",
        "title": "Advertising Engineer",

    },
    {
        "first_name": "Winston",
        "last_name": "Jones",
        "username": "winston.jones",
        "email": "winston.jones@email.com",
        "avatar": "https://robohash.org/rerumeosesse.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+385 381-558-5672 x17266",
        "date_of_birth": "1989-02-03",
        "title": "Banking Associate",
    },
    {
        "first_name": "Jermaine",
        "last_name": "Tremblay",
        "username": "jermaine.tremblay",
        "email": "jermaine.tremblay@email.com",
        "avatar": "https://robohash.org/minusitaqueofficiis.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+370 1-589-662-8894 x53408",
        "date_of_birth": "1979-02-13",
        "title": "Customer Administration Orchestrator",
    },
    {
        "first_name": "Reed",
        "last_name": "Homenick",
        "username": "reed.homenick",
        "email": "reed.homenick@email.com",
        "avatar": "https://robohash.org/assumendafacereeveniet.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+381 (822) 914-6929 x598",
        "date_of_birth": "1996-02-28",
        "title": "Accounting Producer",
    },
    {
        "first_name": "Avril",
        "last_name": "D'Amore",
        "username": "avril.d'amore",
        "email": "avril.d'amore@email.com",
        "avatar": "https://robohash.org/rationevoluptastempora.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+51 1-882-657-6818 x670",
        "date_of_birth": "1972-03-02",
        "title": "International Construction Coordinator",
    },
    {
        "first_name": "Lewis",
        "last_name": "Bergstrom",
        "username": "lewis.bergstrom",
        "email": "lewis.bergstrom@email.com",
        "avatar": "https://robohash.org/autemvoluptatumdolorem.png?size=300x300&set=set1",
        "gender": "Bigender",
        "phone_number": "+251 196.571.4696 x5033",
        "date_of_birth": "1972-10-18",
        "title": "Farming Facilitator",

    },
    {
        "first_name": "Yang",
        "last_name": "Nader",
        "username": "yang.nader",
        "email": "yang.nader@email.com",
        "avatar": "https://robohash.org/recusandaesitest.png?size=300x300&set=set1",
        "gender": "Genderqueer",
        "phone_number": "+975 349.328.8162 x9118",
        "date_of_birth": "1992-08-21",
        "title": "Sales Facilitator",
    },
    {
        "first_name": "Bettyann",
        "last_name": "Abbott",
        "username": "bettyann.abbott",
        "email": "bettyann.abbott@email.com",
        "avatar": "https://robohash.org/inventorevelsed.png?size=300x300&set=set1",
        "gender": "Male",
        "phone_number": "+224 211.322.8253 x24367",
        "date_of_birth": "1987-07-25",
        "title": "Hospitality Representative",
    },
    {
        "first_name": "Dario",
        "last_name": "Luettgen",
        "username": "dario.luettgen",
        "email": "dario.luettgen@email.com",
        "avatar": "https://robohash.org/utcumqueofficiis.png?size=300x300&set=set1",
        "gender": "Female",
        "phone_number": "+596 690-906-8849 x2023",
        "date_of_birth": "1980-01-30",
        "title": "Hospitality Analyst",
    },
    {
        "first_name": "Lakenya",
        "last_name": "Mertz",
        "username": "lakenya.mertz",
        "email": "lakenya.mertz@email.com",
        "avatar": "https://robohash.org/etmodirem.png?size=300x300&set=set1",
        "gender": "Non-binary",
        "phone_number": "+222 1-610-625-9570 x24167",
        "date_of_birth": "1995-08-07",
        "title": "Manufacturing Supervisor",
    },
    {
        "first_name": "Gabriele",
        "last_name": "Jacobi",
        "username": "gabriele.jacobi",
        "email": "gabriele.jacobi@email.com",
        "avatar": "https://robohash.org/facerequibusdamquia.png?size=300x300&set=set1",
        "gender": "Male",
        "phone_number": "+855 1-694-322-2591 x359",
        "date_of_birth": "1970-10-05",
        "title": "Government Developer",
    }
];

db.Employee
    .remove({})
    .then(() => db.Employee.collection.insertMany(empSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });