



import uuid from "uuid/v4"


const strangerThings = {
    id: uuid(),
    title: "Stranger Things",
    description: "djoifdjdjd",
    image: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/11/PRI_72436505.jpg?quality=90&strip=all&zoom=1&resize=644%2C322&ssl=1",

    seasons: [
        {
            id: uuid(),
        
            title: "luck",
            description: "kdfdnjfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    title: "meeting",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    title: "all together",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    title: "jon done",
                    description: "fnjdkfdsf"
                }
            ]


        },
        {
            id: uuid(),
         
            title: "good",
            description: "kdfdnjfkghgdfdsk",
            epasods: [
                {
                    id: uuid(),
                    title: "good manner",
                    description: "fnjdkjmfdsf"
                },
                {
                    id: uuid(),
                    title: "good day",
                    description: "fnjd,mj,kfdsf"
                }
            ]


        },
        {
            id: uuid(),
     
            title: "bad",
            description: "kdfdnjfdfdfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    title: "the boy",
                    description: "fnjdvvkfdsf"
                },
                {
                    id: uuid(),
                    title: "the lady",
                    description: "fnjdkf vcvdsf"
                },
                {
                    id: uuid(),
                    title: "the woman",
                    description: "fnjdkgfhfdsf"
                }
            ]


        }
    ]

}

const stranger = {
    id: uuid(),
    title: "Stranger",
    description: "djoifdjdjd",
    image: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/11/PRI_72436505.jpg?quality=90&strip=all&zoom=1&resize=644%2C322&ssl=1",
    seasons: [
        {
            id: uuid(),
            title: "look",
            description: "kdfdnjfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"",
                    title: "danger",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "kill",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "dead",
                    description: "fnjdkfdsf"
                }
            ]


        },
        {
            id: uuid(),
            title: "god",
            description: "kdfdnjfkghgdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"",
                    title: "help",
                    description: "fnjdkjmfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "first day",
                    description: "fnjd,mj,kfdsf"
                }
            ]


        },
        {
            id: uuid(),
            title: "bd",
            description: "kdfdnjfdfdfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"",
                    title: "job",
                    description: "fnjdvvkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "done",
                    description: "fnjdkf vcvdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "success",
                    description: "fnjdkgfhfdsf"
                }
            ]


        }
    ]

}

const Titans = {
    id: uuid(),
    title: "Titans",
    description: "djoifdjdjd",
    image: "https://image.cnbcfm.com/api/v1/image/105960905-1560278762975strangerthingsmobilegame.png?v=1560358088&w=678&h=381",
    seasons: [
        {
            id: uuid(),
            title: "look",
            description: "kdfdnjfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"https://cdn.vox-cdn.com/thumbor/4ZyU8QrvUEhUi9_awQAIgeHy8u0=/0x0:2000x1008/1200x800/filters:focal(840x344:1160x664)/cdn.vox-cdn.com/uploads/chorus_image/image/65356380/66.0.0.0.jpg",
                    title: "help",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "cook",
                    description: "fnjdkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "clean",
                    description: "fnjdkfdsf"
                }
            ]


        },
        {
            id: uuid(),
            title: "god",
            description: "kdfdnjfkghgdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"",
                    title: "lady",
                    description: "fnjdkjmfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "women",
                    description: "fnjd,mj,kfdsf"
                }
            ]


        },
        {
            id: uuid(),
            title: "bd",
            description: "kdfdnjfdfdfkdfdsk",
            epasods: [
                {
                    id: uuid(),
                    image:"",
                    title: "access",
                    description: "fnjdvvkfdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "denied",
                    description: "fnjdkf vcvdsf"
                },
                {
                    id: uuid(),
                    image:"",
                    title: "complete",
                    description: "fnjdkgfhfdsf"
                }
            ]


        }
    ]

}
export default [
    strangerThings,
    stranger,
    Titans

]