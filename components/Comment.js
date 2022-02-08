import * as RiIcons from 'react-icons/ri';
import TextHighlighter from './TextHighlighter';

// Todo: Make this a re-usable component!

const Comment = () => {
  return (
    <div className="comment font-italic font-size-small flex align-items-center color-success margin-bottom-4">
      <RiIcons.RiLightbulbFlashFill className="font-size-icon" />
      <div>
        Note that it's <TextHighlighter text="yarn add serato-css" /> for those
        using yarn!
      </div>
    </div>
  );
};

export default Comment;
