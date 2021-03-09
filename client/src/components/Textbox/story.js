let story =  [
        {
            "id": 0,
            "img": "./images/Scene01.jpg",
            "blob": "You are roused from a deep sleep by a drip of icy cold water splashing onto your face, soon discovering you are lying on the frigid floor of a damp cell. There is a dull ache in the back of your head as you recall being ambushed by an unknown assailant and, slowly, you get up. Are you still on the island of Statmos? Or are you some place else entirely? Determined to find out, you scan your surroundings for clues. The flickering light of a torch on the stone wall illuminates your path ahead, revealing an iron door mysteriously left open in front of you. You pry the torch from it’s rusty sconce on the wall, grateful for the light, and take a decisive step through the doorway as you courageously seek answers to your questions.\r\n" + "The other side of the door opens up into a small room, no less damp than the cell you emerged from. A  large rat scurries by as you approach its center and you find yourself flanked by two routes: a dimly lit hallway to your right and a narrow, dark tunnel to your left.\r\n"+ " The entrance to the tunnel is littered with debris, suggesting it was blown in from the other side somehow and, therefore, must not be a natural path in the original design of this dungeon. You swear you hear faint, heavy breathing in the darkness ahead as well..  though it might be your dehydrated mind playing tricks on you. Peering into the dimly lit hallway on your right, you can at least see a light at the end of this path.",
            "options": [
                {
                    "name": "Dimly lit hallway",
                    "next": 2
                },
                {
                    "name": "Dark Tunnel",
                    "next": 1
                }
            ]
        },
        {
            "id": 1,
            "img": "./images/Scene03.jpg",
            "blob": "You plunge into the darkness of the tunnel, torch firmly in hand. The cavern walls press down on you from all sides as they get narrower and more uneven the further you plod on, until finally the ceiling opens up. You are standing in the middle of what appears to be a large burial chamber. Shadows dance about on the walls as the light of your torch illuminates giant ancient stone coffins, some appearing to have been purposely moved from their original resting place and pried open. Piles of bones are scattered about the ground and an uneasiness falls upon you as you peer into the other end of the chamber, movement catching your eye. A large figure stands immobile in the distance, your torchlight giving you no indication as to what the figure might be as it is still half shrouded in darkness, but you are certain it is aware of your presence. Its glowing eyes have locked onto you but it makes no moves toward you. Perhaps you can still turn back..",
            "options": [
                {
                    "name": "Keep Going",
                    "next": 5
                },
                {
                    "name": "Dimly Lit Hallway",
                    "next": 2
                }
            ]
        },
        {
            "id": 2,
            "blob": "Deciding to play it safe, you take the dimly lit hallway to the right, passing lit torches and occasionally stepping into a small puddle every few steps. Eventually, you make it to the other end and find yourself in the center of a small atrium. A large stone gargoyle stands guard on the far end of the room, but other than that there is no visible exit in sight. You approach the statue and to your surprise, it speaks to you in an icy whisper that sends chills down your spine. “It can't be seen, can't be felt, can't be heard, and can't be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, and kills laughter. What is it?”",
            "options": [
                {
                    "name": "The Dark",
                    "next": 4
                },
                {
                    "name": "My Mother-in-Law?",
                    "next": 3
                }
            ]
        },
        {
            "id": 3,
            "blob": "The gargoyles wings crack like an old tree as its whole body begins to move. “You are not the doctor.” It says. It’s thunderous roar echoes across the room and, though you fight bravely, you are no match for the stone beast unarmed and meet a swift end to your very short journey. THE END",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                },
            ]
        },      
        {
            "id": 4,
            "blob": "The gargoyle nods. “Welcome home, good doctor.” It says as the platform underneath it activates, revealing a hidden path behind the statue. Afterwards, the statue remains unresponsive and still. You thank your sharp wits and continue onwards to the hidden path. You recall the gargoyle calling you ‘doctor’ and wonder what it all means as you proceed forward and soon enough you find yourself in a winding hallway lit with more torches. Up ahead is an open iron door and faint humming can be heard from beyond the door frame. You can only imagine that to be the ‘good doctor’ the gargoyle spoke about. To the left of you is a wooden door opened slightly and you can see descending stairs through the slit of the door.",
            "options": [
                {
                    "name": "Investigate",
                    "next": 6
                },
                {
                    "name": "Take The Stairs",
                    "next": 7
                }
            ]
        },      
        {
            "id": 5,
            "img": "./images/Scene02.jpg",
            "blob": "Daringly, you step forward. As you approach the figure your torchlight reveals more and more of the path ahead, crunching underneath your feet as piles of bones become more frequent. Your heart rate escalates as the glowing eyes inch closer with each step you take until, finally, your light is within range to see the figure clearly. A giant skeletal entity with its body half fused to the wall stares blankly at you, looming over a gathering of burnt corpses frozen in varying positions of prayer. Its free hand lays motionless to the side and you wonder why it pays you no mind. You notice an arched door directly underneath it, the direction all of the corpses are facing, and another room to the west with faint, eery sounds of weeping past its opening. Another survivor, perhaps?",
            "options": [
                {
                    "name": "Arched Door",
                    "next": 8
                },
                {
                    "name": "Enter Room",
                    "next": 9
                }
            ]
        },
        {
            "id": 6,
            "blob": "You dare to investigate the humming and continue down the expansive hallway. Stepping through the doorway, the humming ceases immediately. You gaze upon a damp, dimly lit office with a hospital bed in the far left corner, medical equipment strewn about the floor and on a desk in the center of the room facing you. A man sits in its chair, scribbling hastily into a notebook. Garbed in a black cloak and a white beak-like mask, you can only assume you are looking at the doctor the gargoyle spoke of. “Ah, come in, come in..”, he says, beckoning you with a gesture of his hand. The iron door behind you clangs shut as two skeletal beings flank you. “You’ve saved me the trouble of fetching you. The infection runs rampant within you.. But I believe I have the cure.” He walks over to you, his hand snaps up from behind the book he was reading and touches your arm.Your world turns dark as his deadly grip drains you of life. Your journey has come to an abrupt end; your body eventually becoming one of the doctors frightful creations. THE END",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                },
            ]
        },
        {
            "id": 7,
            "blob": "You opt to go the alternative route and avoid confrontation with whatever was behind that door. Taking the wooden door to your left, you rush down a flight of stairs and swear you hear shouts from up above you. It seems you may have attracted unwanted attention. Clutching your torch tightly you pick up the pace and it is not long before you also start to hear the rush of running water somewhere below as you near the base of the stairs. At the bottom at last you find yourself at the very edge of a huge, dark underground basin. The water here is eerily still and stalactites grow from the ceiling; to your left is a steep path sloping upwards that takes you to yet another door, however there is a small raft you can use to reach the other side of the water which extends into another tunnel. From behind you, footsteps can be heard descending rapidly down the stairs, prompting you to make a split second decision.",
            "options": [
                {
                    "name": "Use Raft",
                    "next": 10
                },
                {
                    "name": "Open Metal Door",
                    "next": 11
                }
            ]
        },
        {
            "id": 8,
            "blob": "Moving past the burnt corpses, you daringly make your way to the exit underneath the giant, who stirs a bit as you approach it. It howls, raising its free hand to its head. You take this as a sign to pick up the pace and narrowly escape death as you run past the doorway while the entity conjures flames out of thin air, lighting the burial chamber ablaze where you were mere seconds ago. You look back over your shoulder briefly as the corpses crumble into ashes. The giant continues its howling for a long time, enraged at having been outsmarted. Its voice eventually fades as you continue down the hallway at a brisk pace, which steadily takes you uphill. You grow hopeful and then suddenly come across a fork in the road. You look at the path to your left and notice the stone walls turn into dirt. You look to your right and feel that the air more clearly in that direction.",
            "options": [
                {
                    "name": "Dirt-walled Tunnel",
                    "next": 12
                },
                {
                    "name": "Regular Tunnel",
                    "next": 13
                }
            ]
        },
        {
            "id": 9,
            "blob": "You decide to play it safe and avoid the large entity, stumbling down a few steps and coming into a dimly lit room. Seeing something crouched down in the middle of the barren floor, you figure this person to be the source of the weeping. However, an uneasiness starts to settle in as you hover your torchlight over the crouched figure. Sharp talons grow visibly from its fingertips and it cups its face into its hands, seemingly paying you no mind. Unsure about this decision, you start heading back out the way you came in, but before you can fully turn around your world turns dark as the creature in one swift movement runs at you full speed in the dark and eviscerates you. Your journey has come to an abrupt and brutal end. THE END",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                }
            ]
        },
        {
            "id": 10,
            "blob": "You walk further into the room and suddenly fall head first into rushing water. The pull is too strong and you are unable to pull yourself out. Before you know it you’re pulled deeper underground and you drown. THE END",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                }
            ]
        },
        {
            "id": 11,
            "blob": "With no time to lose, you bolt towards the metal door up the path, the light of your torch guiding your steps and preventing you from falling headfirst into the cold, murky water. At this point, the basin begins to stir, the waters growing more chaotic and from the depths of the waters emerge a scaly, slithering sea serpent with its focus fixated on you and your torchlight. It hisses at you, preparing to strike and without bothering to look behind you, you swing open the door and slam it shut just in time, locking it. A loud thud shakes the door violently and an enraged serpent thrashes about at the other side of the door, angered at having let its meal escape. With a sigh of relief, you thank your lucky stars and continue on, never stopping for fear of being discovered again. Eventually, you reach the end of the tunnel and find a small lever in the stone. Pulling it, a slab of rock moves away from you, revealing a secret entrance to some sort of catacomb. Ahead is an arched door surrounded by burnt corpses and a room where weeping can be heard",
            "options": [
                {
                    "name": "Enter Room",
                    "next": 9
                },
                {
                    "name": "Arched Door",
                    "next": 8
                }
            ]
        },
        {
            "id": 12,
            "blob": "You begin walking down an uneven, winding dirt corridor for what seems like hours. The torch is nearing the end of its use. Doubts begin to arise and you begin to wonder whether you should turn back now or risk being left in the dark. You finally decide to head back until you feel a slight breeze up ahead, causing your doubts to subside. With newfound hope, you proceed further. After turning a corner, you see light up ahead. The exit! You start running and finally break free from your underground prison.. You’ve escaped. Welcoming the sun’s warmth on your skin, you look around and find that you are back on the coast of Statmos Island. Your boat is still tied to the docks nearby and you are eager to leave. After disembarking, you look back towards the island one final time. It bothers you that you might never find out what happened on Statmos.. But at the very least you’re alive. YOU WIN",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                }
            ]
        },
        {
            "id": 13,
            "blob": "The tunnel continues uphill and you grow increasingly more hopeful but little by little the tunnel grows narrower till you’re at the point where you have to push yourself through. But wait, is that light up ahead? You push yourself further and further into the narrow cave until you can’t move anymore. But that light, it’s just around the corner.. You think there must be another way out so you try to turn back but you find yourself stuck. You’ve wedged yourself too far inside. If only desperation hadn’t taken hold of you, you think to yourself as you wait out your long inevitable death. THE END",
            "options": [
                {
                    "name": "Start Over",
                    "next": 0
                },
                {
                    "name": "End Game",
                    "next": 0
                }
            ]
        }
        // {
        //     "id": 14,
        //     "blob": "You decide to play it safe and avoid the large entity, stumbling down a few steps and coming into a dimly lit room. Seeing something crouched down in the middle of the barren floor, you figure this person to be the source of the weeping. However, an uneasiness starts to settle in as you hover your torchlight over the crouched figure. Sharp talons grow visibly from its fingertips and it cups its face into its hands, seemingly paying you no mind. Unsure about this decision, you start heading back out the way you came in, but before you can fully turn around your world turns dark as the creature in one swift movement runs at you full speed in the dark and eviscerates you. Your journey has come to an abrupt and brutal end. THE END",
        //     "options": [
        //         {
        //             "name": "Start Over",
        //             "next": 0
        //         },
        //         {
        //             "name": "Start Over",
        //             "next": 0
        //         }
        //     ]

        // },

   ]
 


 module.exports = story;