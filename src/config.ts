import { timeToSeconds } from "./lib/utils";

export const config = {
  landingPage: {
    headline: "Would you be my valentine?",
    yesButtonText: "Yes",
    noButtonTexts: [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ],
  },
  gallery: [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/v1771017216/Valentine/adeolu/WhatsApp_Image_Feb_12_2026_1.jpg",
      message: "Our first date was truly magical...",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1771027585/Valentine/adeolu/Marina_About_Love.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("1:09"),
      nowPlaying: "Now Playing: About Love",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/e_improve,e_sharpen/v1771014606/Valentine/adeolu/WhatsApp_Image_Feb_11_2026_1.jpg",
      message: "Do you remember when we first met?",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1771027595/Valentine/adeolu/To_Love_A_Woman_-_Lionel_Richie_Enrique_Iglesias.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("1:06"),
      nowPlaying: "Now Playing: To Love a Women",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/v1771014606/Valentine/adeolu/WhatsApp_Image_Feb_12_2026.jpg",
      message: "Every moment with you is a treasure.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1771027582/Valentine/adeolu/Love_Never_Felt_So_Good_feat_Michael_Jackson.mp3",
      audioStartTime: timeToSeconds("0:17"),
      audioEndTime: timeToSeconds("1:15"),
      nowPlaying: "Now Playing: Love Never Felt So Good",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/e_improve,e_sharpen/v1771014606/Valentine/adeolu/WhatsApp_Image_Feb_11_2026_4.jpg",
      message: "I love our adventures together.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770277907/Valentine/default/Syemca_Chike_Love_Egbugomo_Visualizer.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("0:59"),
      nowPlaying: "Now Playing: Love Egbugomo",
    },
    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/v1771020877/Valentine/adeolu/WhatsApp_Image_Feb_5_2026.jpg",
      message: "You make me smile every single day.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1771018677/Valentine/adeolu/Moreni_Keji_-_Konstant.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("2:14"),
      nowPlaying: "Now Playing: Morenikeji",
    },
    {
      id: 6,
      imageUrl:
        "https://res.cloudinary.com/dymahyzab/image/upload/e_improve,e_sharpen/v1771014607/Valentine/adeolu/WhatsApp_Image_Feb_11_2026_3.jpg",
      message: "You are my everything.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770280350/Valentine/default/Certain_Things_Lyrics_ft_Chasing_Grace.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("1:24"),
      nowPlaying: "Now Playing: Certain Things",
    },
  ],
  galleryUI: {
    nowPlayingPrefix: "Now Playing: Track",
    swipeInstruction: "Swipe to continue",
  },
  loveLetter: {
    text: `My Dearest Valentine,

If words can express the way my heart beats in sync, every beat will be a melody that sings a song of how much I missed every moment we were apart. 
      
Sorry can't mend the times I wasn't there, moments you wanted to share things with me, times when you needed me to encourage you. I was missing from your life for 3 years, and the thought of it still feels like a lifetime. 
      
I'm aware I broke your trust, and I'm not asking for forgiveness lightly. But what I want you to know is that I've been living these years without the part of me that was with you. I'm willing to do whatever it takes to rebuild, to relearn, and to be there this time. 

If you can find it in your heart to trust me again, I'd be honored to be part of your journey. You're the light of my life, beam 😊

Forever yours,
Your Valentine`,
    audioUrl:
      "https://res.cloudinary.com/dymahyzab/video/upload/v1771020100/Valentine/adeolu/Buju_BNXN_Pidgin_And_English.mp3", // Placeholder: Add your audio URL here
    audioStartTime: timeToSeconds("0:31"),
    audioEndTime: timeToSeconds("1:17"), // 2 minutes
    typingSpeed: 280,
  },
  intro: {
    imageUrl:
      "https://res.cloudinary.com/dymahyzab/image/upload/v1771014617/Valentine/adeolu/WhatsApp_Video_Feb_11_2026.gif",
    audioUrl:
      "https://res.cloudinary.com/dymahyzab/video/upload/v1771027607/Valentine/adeolu/The_Weeknd_I_Feel_It_Coming_Feat_Daft_Punk.mp3",
    audioStartTime: timeToSeconds("0:00"),
    audioEndTime: timeToSeconds("0:18"),
  },
};
