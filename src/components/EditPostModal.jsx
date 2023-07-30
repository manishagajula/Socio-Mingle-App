import "../css/editPostModal.css";

export const EditPostModal = ({ content }) => {
  return (
    <div className="modalOuterWrapper">
      <div
        className="modalInnerWrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p> Inside edit post modal</p>
        <textarea type="text" value={content} rows={5} cols={20} width="100%" />
      </div>
    </div>
  );
};
