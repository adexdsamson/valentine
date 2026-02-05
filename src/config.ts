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
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic+couple+meeting+in+a+cozy+coffee+shop+warm+lighting+digital+art+style&image_size=portrait_4_3",
      message: "Do you remember when we first met?",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770277889/Valentine/default/With_You_Refix_feat_Zion_Beatz.mp3",
      audioStartTime: timeToSeconds("0:20"),
      audioEndTime: timeToSeconds("1:35"),
      nowPlaying: "Now Playing: With You",
    },
    {
      id: 2,
      imageUrl:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic+dinner+by+the+beach+at+sunset+digital+art+style&image_size=portrait_4_3",
      message: "Our first date was truly magical...",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770277889/Valentine/default/With_You_Refix_feat_Zion_Beatz.mp3",
      audioStartTime: timeToSeconds("1:37"),
      audioEndTime: timeToSeconds("2:12"),
      nowPlaying: "Now Playing: With You (Refix)",
    },
    {
      id: 3,
      imageUrl:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=happy+couple+laughing+together+in+a+park+spring+season+digital+art+style&image_size=portrait_4_3",
      message: "Every moment with you is a treasure.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770277907/Valentine/default/Syemca_Chike_Love_Egbugomo_Visualizer.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("1:04"),
      nowPlaying: "Now Playing: Love Egbugomo",
    },
    {
      id: 4,
      imageUrl:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=couple+hiking+adventure+mountains+scenic+view+digital+art+style&image_size=portrait_4_3",
      message: "I love our adventures together.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770279793/Valentine/default/Olivia_Dean_So_Easy_Lyrics.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("0:59"),
      nowPlaying: "Now Playing: So Easy",
    },
    {
      id: 5,
      imageUrl:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close+up+holding+hands+wearing+rings+romantic+mood+digital+art+style&image_size=portrait_4_3",
      message: "You make me smile every single day.",
      audioUrl:
        "https://res.cloudinary.com/dymahyzab/video/upload/v1770280225/Valentine/default/Now_And_Always_Lyric_Video.mp3",
      audioStartTime: timeToSeconds("0:00"),
      audioEndTime: timeToSeconds("2:14"),
      nowPlaying: "Now Playing: Now And Always",
    },
    {
      id: 6,
      imageUrl:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=silhouette+couple+kissing+under+moonlight+starry+night+digital+art+style&image_size=portrait_4_3",
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

From the moment our paths crossed, my world has been brighter. Your smile lights up my darkest days, and your laughter is my favorite melody.

Every memory we've shared, every adventure we've taken, has only deepened my love for you. You are my best friend, my confidant, and my greatest love.

Thank you for being you. Thank you for choosing me.

Forever yours,
Your Valentine`,
    audioUrl:
      "https://res.cloudinary.com/dymahyzab/video/upload/v1770280971/Valentine/default/Running_Up_That_Hill.mp3", // Placeholder: Add your audio URL here
    audioStartTime: timeToSeconds("0:00"),
    audioEndTime: timeToSeconds("0:53"), // 2 minutes
    typingSpeed: 280,
  },
};
