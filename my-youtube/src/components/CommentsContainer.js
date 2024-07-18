import smileyLogo from "../components/images/smiley-logo.jpg";

const CommentsData = [
  {
    name: "Roma",
    text: "xyz",
    replies: [],
  },
  {
    name: "Rangelu",
    text: "rang",
    replies: [
      {
        name: "Roma",
        text: "xyz",
        replies: [
          {
            name: "Roma",
            text: "xyz",
            replies: [
              {
                name: "Roma",
                text: "xyz",
              },
            ],
          },
        ],
      },
      {
        name: "Roma",
        text: "xyz",
        replies: [
          {
            name: "Roma",
            text: "xyz",
          },
        ],
      },
    ],
  },
  {
    name: "Anmol",
    text: "abc",
    replies: [
      {
        name: "Roma",
        text: "xyz",
      },
    ],
  },
  {
    name: "Toodle",
    text: "too",
    replies: [
      {
        name: "Roma",
        text: "xyz",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 bg-gray-100 shadow-md rounded-lg my-2">
      <img alt="user" src={smileyLogo} className="w-11 h-11 rounded-full" />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comment key={index} data={comment} />
          {comment.replies?.length > 0 && ( // Check for replies length
            <div className="pl-5 ml-5 border border-l-4">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
