import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        
        {
            name: 'Kwell',
            password:'999',
            checkedOut: [],
            isAdmin: false
        },
        {
            name: 'James',
            password:'999',
            checkedOut: [],
            isAdmin: false
        },
        {
            name: 'Lincoln G',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },
        {
            name: 'Cody',
            password:'999',
            checkedOut: [],
            isAdmin: true
        },


    ],
   books:[
    {
        title: "Duck on a Boat",
        author: 'Sabrina Roberts',
        isbn: '9781338265446',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Elephant at the Beach",
        author: 'Alec Young',
        isbn: '978133826547',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Race",
        author: '',
        isbn: '0',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Cats",
        author: '',
        isbn: '0',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Penguins",
        author: 'Cynthia Parker',
        isbn: '9781338265439',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Summer Camp",
        author: 'Elezabeth Spence',
        isbn: '9781338265514',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "This Fox",
        author: 'Marc Jordan',
        isbn: '9781338265545',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Rabbits GO!",
        author: 'Scott A taylor',
        isbn: '9781338265620',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Snow",
        author: 'Jack Crosby',
        isbn: '9781338265415',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "I Like the Seasons",
        author: 'Ireana Martin',
        isbn: '9781338236859',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Artist",
        author: 'Alex Ives',
        isbn: '9781338236750',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "We Play Together",
        author: 'Wiley Blevins',
        isbn: '9781338236729',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "What Insects Do",
        author: 'Michiko Lambearde',
        isbn: '9781338236743',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Chet Rides Home",
        author: 'Cynthia Rothman',
        isbn: '9781338262711',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Bears! Bears! Bears!",
        author: 'Max Bank',
        isbn: '9781338236736',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "The Hen Sat",
        author: 'Pam Lewis',
        isbn: '9780395739853',
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "Pancakes for Breakfast",
        author: 'Tomie DePaola',
        isbn: '9781328710604',
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "Chalk",
        author: 'Bill Thomson',
        isbn: '9780761455264',
        level: "A",
        image: "",
        count: 1,

    },
    {
        title: "The Farmer",
        author: 'Danny Benjamin',
        isbn: '978133823687',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Elephants",
        author: 'J. C. Harnell',
        isbn: '9781338236880',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "Mix it Up",
        author: 'Benjamin Reed',
        isbn: '9781338236842',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "My Kitten",
        author: 'Jane Michelle',
        isbn: '9781338236866',
        level: "A",
        image: "",
        count: 6,

    },
    {
        title: "I'm a Lot of Sometimes!",
        author: 'Jack Guinan',
        isbn: '9781634401777',
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Dinosaur Days",
        author: 'Joyce Milton',
        isbn: '9780394870236',
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Have You Seen My Cat?",
        author: 'Eric Carle',
        isbn: '978068982310',
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Ducks in Muck",
        author: 'Lori Haskins',
        isbn: '0',
        level: "B",
        image: "",
        count: 1,

    },
    {
        title: "Games",
        author: '',
        isbn:' 0',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "The Windy Day",
        author: 'Emily Banks',
        isbn: '987133823897',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Rain! Rain! Go Away!",
        author: 'Lucy Howard',
        isbn: '9781338253689',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "The Shape Hunt",
        author: 'M. D. Lee',
        isbn: '9781338253702',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "How We Roll",
        author: 'Mackie Dougal',
        isbn: '9781338253672',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Look at Me!",
        author: 'Christine Veronica',
        isbn: '9781338253719',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Trains Go! Planes Fly!",
        author: 'Julie Micheals',
        isbn: '9781338253665',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Color it Orange",
        author: 'Kevin Fulton',
        isbn: '9781338253658',
        level: "B",
        image: "",
        count: 6,

    },
    {
        title: "Sports",
        author: 'Ruth Mattison',
        isbn: '9781584535324',
        level: "C",
        image: "",
        count: 1,

    },
    {
        title: "The Zoo Book",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,

    },
    {
        title: "My Dog Jet",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "The Ocean",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Baby Kermit's Opposites",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Muppet Babies Word Book",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Things that Go Air and Sea",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "Things that Go on Land",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Olivia's Opposites",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Lightning's Feelings",
        author: '',
        isbn:'0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids The Best Pet",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1
    
    },
    {
        title: "Nat Geo Kids Lots of Spots",
        author: '',
        isbn:' 0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids Bowels",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Nat Geo Kids Animal KIngdom Bug Hunt",
        author: '',
        isbn:'0',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Water is Everywhere",
        author: '',
        isbn: '',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Green Means Go",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Let's Play Soccer",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "The Bug Dance",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "See My Stripes",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 7,
    
    },
    {
        title: "If I Could Build a House",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Alfie and Gus",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Forest Fun",
        author: '',
        isbn: '0',
        level: "C",
        image: "",
        count: 6,
    
    },
    {
        title: "Ron's Big Mission",
        author: 'Rose Blue & Corinne Naden',
        isbn: '9780545290098',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Taos Pueblo",
        author: 'Jonathan Warm Day',
        isbn: '9781574160802',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "The Good, The Bad And The Spooky",
        author: 'Jory John and Pete Oswald',
        isbn: '9780062954541',
        level: "m",
        image: "",
        count: 1,
    
    },
    {
        title: "The Complete Adventures of Curious George",
        author: 'Margret and H.A Rey',
        isbn: '9780618164417',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Tyrannosaurus Wrecks!",
        author: 'Sudipta Bardhan-Quallen',
        isbn: '9781419710353',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "The Big Adventures of Tiny House",
        author: 'Susan Schaefer Bernardo',
        isbn: 'LPNRR707243178',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Clifford's Birthday Party",
        author: 'Norman Bridwell',
        isbn: '9780590442794',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Super-Completely And Totally The Messiest",
        author: 'Judith Viorst',
        isbn: '',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Learning About The Earth Volcanoes",
        author: '',
        isbn: '9780531208458',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Cloudy With a Chance of Meatballs",
        author: 'Judi Barrett',
        isbn: '9780689707490',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Celebrating CALIFORNIA",
        author: 'Marion Dane Bauer',
        isbn: '978054786977',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Bugs! Bugs! Bugs!",
        author: 'Jennifer Dussling',
        isbn: '978078434388',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Take a Closer Look at Bees",
        author: 'JoAnn Early Macken',
        isbn: '9781634400527',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "The Berenstain Bears' Bedtime Battle",
        author: 'Stan & Jan Berenstain',
        isbn: '9780060573812',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Chester's Way",
        author: 'Kevin Henkes',
        isbn: '',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "The Girl Who Thought In Pictures",
        author: 'Dr. Temple Grandin',
        isbn: '978133828227',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Chrysanthemum",
        author: 'Kevin Henkes',
        isbn: '9785090135658',
        level: "M",
        image: "",
        count: 3,
    
    },
    {
        title: "Nappy Hair",
        author: 'Carolivia Herron',
        isbn: '9780679894452',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Memories of an Elf",
        author: 'Devin Scillian',
        isbn: '9780545889049',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Lilly's Purple Plastic Pures",
        author: 'Kevin Henkes',
        isbn: '9780688128975',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "All-of-a-Kind Family Hanukkah",
        author: 'Emily Jenkins & Paul O. Zelinsky',
        isbn: '9780399554193',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Bugs Don't Hug",
        author: 'Heather L. Montgomery',
        isbn: '9781580898164',
        level: "M",
        image: "",
        count: 1,
    
    },
    {
        title: "Spots",
        author: 'Ruth Mattison',
        isbn: '978158453524',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "The Zoo Book",
        author: 'A Golden Super Shape Book',
        isbn: '03350010060',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "My Dog Jet",
        author: 'Kathryn Lewis',
        isbn: '9780021821105',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "The Ocen",
        author: 'Michele Dufresne',
        isbn: '97810584533528',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Baby Kermit's Opposites",
        author: 'Bonnie Worth',
        isbn: '9780516090726 ',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Muppet Babies Word Book",
        author: 'Bonnie Worth',
        isbn: '9780516090788',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Things that go Air & Sea",
        author: 'Unknown',
        isbn: '63277499479',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Things that go on Land",
        author: 'Unknown',
        isbn: '639277499479',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Olivia's Opposites",
        author: ' Ian Falconer',
        isbn: '076714006997',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Lightning's Feeling",
        author: 'Unknown',
        isbn: '9781423183136',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "The Best Pet",
        author: 'Unknown',
        isbn: '9780545766456',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Lots of Spots",
        author: 'National Geographic Kids',
        isbn: '978054576648',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Long Vowels Activity Book",
        author: 'National Geographic Kids',
        isbn: '9780545766562',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Bug Hunt",
        author: 'National Geographic Kids',
        isbn: '9780545766531',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Water is Everywhere",
        author: 'Caryn Carroll',
        isbn: '9781338253849',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Water is Everywhere",
        author: 'Caryn Carroll',
        isbn: '9781338253849',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Green Means Go",
        author: 'Alex Ives',
        isbn: '9781338236903',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Let's Play Soccer",
        author: 'David Michaels',
        isbn: '9781338256420',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "The Big Dance",
        author: 'Cynthia Rothman',
        isbn: '9781338256451',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "If I Could Build a House",
        author: 'Bailey Carrell',
        isbn: '9781338262810',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "So Much Fun",
        author: 'Ray Lemmon',
        isbn: '9781338262759',
        level: "C",
        image: "",
        count: 7,
    
    },
    {
        title: "Cool Kangaroo",
        author: 'Ana Galan',
        isbn: '9781338253924',
        level: "C",
        image: "",
        count: 7,
    
    },
    {
        title: "Alfie and Gus",
        author: 'Michelle Lombarde',
        isbn: '9781338256505',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Forest Fun",
        author: 'Irvin Ajes',
        isbn: '9781338253696',
        level: "C",
        image: "",
        count: 1,
    
    },
    {
        title: "Shapes, Shapes, Shapes",
        author: 'Tana Hoban',
        isbn: '9780545512077',
        level: "D",
        image: "",
        count: 1,
    
    },
    {
        title: "What Can Climb?",
        author: 'Michele Dufresne',
        isbn: '9781584538431',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "Mouse Paint",
        author: 'Ellen Stoll Walsh',
        isbn: '9780152001186',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "Mr. Noisy",
        author: 'Rozanne Lanczak Williams',
        isbn: '030554036538',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "What Can We Learn About Animals?",
        author: 'Houghton Mifflin Harcourt',
        isbn: '9780544071964',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "Animal Groups",
        author: 'Houghton Mifflin Harcourt',
        isbn: '9780544072060',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "Pancakes For Breakfast",
        author: 'Tomie DePaola',
        isbn: '9781328710604',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "I See Patterns",
        author: 'Linda Benton',
        isbn: '03055403706',
        level: "D",
        image: "",
        count: 1,
    },
    {
        title: "Red-eyed Tree Frogs",
        author: 'Kris Bonnell',
        isbn: '9781608925629',
        level: "D",
        image: "",
        count: 1,
    },
]
}

export default data