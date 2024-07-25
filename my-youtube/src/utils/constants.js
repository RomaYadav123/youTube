const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 10;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
