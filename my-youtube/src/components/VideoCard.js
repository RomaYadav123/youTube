const VideoCard = ({ info }) => {
  console.log("checking for info -->", info);

  //extracting snippet & statistics from info..//
  if (!info) {
    return <div>Loading...</div>;
  }

  // Destructuring only if info is defined
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img alt="video" src={thumbnails?.medium?.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
