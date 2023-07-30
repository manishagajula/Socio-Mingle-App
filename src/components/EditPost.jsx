import { TipleDotsSvg } from "../svgs/TripleDotsSvg";
import { useState } from "react";
import { EditPostModal } from "./EditPostModal";

export const EditPost = ({ content }) => {
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  return (
    <div>
      <TipleDotsSvg />
      <div>
        <p
          onClick={(e) => {
            e.stopPropagation();
            setShowEditPostModal(true);
          }}
        >
          Edit
        </p>
        <p>Delete</p>
      </div>
      {showEditPostModal && <EditPostModal content={content} />}
    </div>
  );
};
