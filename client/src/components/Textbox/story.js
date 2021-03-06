// import Img_0 from "../../../public/images/Weapon.jpeg"

let story =  [
        {
            "id": 0,
            "img": "https://cdn.pixabay.com/photo/2017/08/16/22/27/thumbs-up-2649310_960_720.jpg",
            "blob": "You wake up in a cellar, the only light being a torch on the wall showing a single open doorway in front of you. The walls to your left and right are stone and barren. You take the torch off the wall and immediately walk through the doorway, you never liked being underground and now youre starting to feel claustrophobic. On the other side of the rounded doorway you find yourself in a tiny room with an opening to your left and right. Which do you feel most compelled to take?",
            "options": [
                {
                    "name": "right",
                    "next": 2
                },
                {
                    "name": "left",
                    "next": 1
                }
            ]

        },
        {
            "id": 1,
            "blob": "You start going down a damp hallway and become heavily uneasy because of the giant lurking in the corner and his eyes inpentreting you like daggers. Do you:",
            "options": [
                {
                    "name": "keep going",
                    "next": 5
                },
                {
                    "name": "turn back",
                    "next": 2
                }
            ]

        },
        {
            "id": 2,
            "blob": "With the cell on your right you walk straight toward the other doorway. Inside you find a slightly bigger room with an opening in front of you and a hallway to your left.",
            "options": [
                {
                    "name": "left",
                    "next": 4
                },
                {
                    "name": "straight",
                    "next": 3
                }
            ]
        },
        {
            "id": 3,
            "blob": "You open the door, its just an empty room. You take a few steps in and suddenly you’re falling.. Falling falling, down an endless pit. THE END ",
            "options": [
                {
                    "name": "Start over",
                    "next": 0
                },
                {
                    "name": "Start over",
                    "next": 0
                },
            ]

        },
       
        {
            "id": 4,
            "blob": "You enter the hallway, its pretty big in here, you think to yourself. You can’t even see the ceiling. You notice an entry on your left with stairs leading down into darkness.",
            "options": [
                {
                    "name": "go straight",
                    "next": 6
                },
                {
                    "name": "go left",
                    "next": 7
                }
            ]

        },
        
        {
            "id": 5,
            "blob": "You pass by the monster, your heart beating faster with each step but he pays you no mind. He seems to be infused to the wall. You keep down the hallway and notice a door to your left. Do you ",
            "options": [
                {
                    "name": "go straight",
                    "next": 8
                },
                {
                    "name": "go left",
                    "next": 9
                }
            ]

        },
        {
            "id": 6,
            "blob": "You continue down the expansive hallway, you see sudden movement from up above. Bats? I must be getting closer to the exit you think. You keep walking and see some light up ahead, torch light. You walk upon a dimly lit room with a hospital bed in the far left corner, medical equipment strewn about and on a desk in the middle. A man sits in a chair, scribbling into a notebook. He’s dressed as if a doctor, wearing a mask with a long sharp nose. “Come in”, he says “I can smell your infection from here” His hand snaps up from behind the book and touches your arm. Immediately your dead, your body becoming one of the doctors frightful creations. THE END",
            "options": [
                {
                    "name": "Start over",
                    "next": 0
                },
                {
                    "name": "Start over",
                    "next": 0
                },
            ]

        },
        {
            "id": 7,
            "blob": "You walk down a few flights of stairs and start hearing running water. You enter a dark room, still unable to see the source of the sound, the rest of the room falls into darkness but theres a metal door to your right. Do you",
            "options": [
                {
                    "name": "explore room",
                    "next": 10
                },
                {
                    "name": "open metal door",
                    "next": 11
                }
            ]

        },
        {
            "id": 8,
            "blob": "You continue down a hallway that is widening out and seems to be going uphill. You grow hopeful and then you suddenly come across a fork in the road. You look into the left path and notice the stone walls turn into dirt. You look into the right path and notice no change. Which path calls out to you?",
            "options": [
                {
                    "name": "dirt-walled tunnel",
                    "next": 12
                },
                {
                    "name": "regular tunnel",
                    "next": 13
                }
            ]

        },
        {
            "id": 9,
            "blob": "You stumble down a few steps and come into a dimly lit room. You see something crouched down in the middle of the barren floor, they seem to be weeping. Is this a trap? You start heading out the way you came in but before you can fully turn around the THING in the room springs up and breaks your neck. THE END ",
            "options": [
                {
                    "name": "start over",
                    "next": 0
                },
                {
                    "name": "start over",
                    "next": 0
                }
            ]

        },
        {
            "id": 10,
            "blob": "You walk further into the room and suddenly fall head first into rushing water. The pull is too strong and you are unable to pull yourself out. Before you know it you’re pulled deeper underground and you drown. THE END",
            "options": [
                {
                    "name": "start over",
                    "next": 0
                },
                {
                    "name": "start over",
                    "next": 0
                }
            ]

        },
        {
            "id": 11,
            "blob": "You enter a hallway and you seem to be going uphill, you start feeling a little hopeful. Finally after what feels like ages you reach the end of the hallway. You have the ability to go straight into another room or make a right down another hallway. Which do you choose?",
            "options": [
                {
                    "name": "enter room",
                    "next": 14
                },
                {
                    "name": "go right",
                    "next": 8
                }
            ]

        },
        {
            "id": 12,
            "blob": "You begin walking down the hallway, unsure of your choice. You start thinking of turning back but then you feel a slight breeze, is that light? You start running and break free of your underground prison.. Only to find your world is now at war. YOU WIN",
            "options": [
                {
                    "name": "start over",
                    "next": 0
                },
                {
                    "name": "start over",
                    "next": 0
                }
            ]

        },
        {
            "id": 13,
            "blob": "You pick the right tunnel and give it up to fate, you’ve made it this far, right? The tunnel continues uphill and you grow increasingly more hopefully but little by little the tunnel grows narrower till you’re at the point where you have to push yourself through. But wait, is that light up ahead? You push yourself further and further into the narrow cave until you can’t move anymore. But that light, its just around the corner.. You think there must be another way out so you try to turn back but you cant move. You’ve wedged yourself so deep into the cave and now youre stuck. This was a trap, you think to yourself as you wait out your long inevitable death. THE END",
            "options": [
                {
                    "name": "start over",
                    "next": 0
                },
                {
                    "name": "start over",
                    "next": 0
                }
            ]

        },
        {
            "id": 14,
            "blob": "You stumble down a few steps and come into a dimly lit room. You see something crouched down in the middle of the barren floor, they seem to be weeping. Is this a trap? You start heading out the way you came in but before you can fully turn around the THING in the room springs up and breaks your neck. THE END",
            "options": [
                {
                    "name": "start over",
                    "next": 0
                },
                {
                    "name": "start over",
                    "next": 0
                }
            ]

        },

   ]
 


 module.exports = story;