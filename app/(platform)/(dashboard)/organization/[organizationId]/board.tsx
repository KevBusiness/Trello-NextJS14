import {deleteBoard} from "@/actions/delete-board";
import {FormSubmit} from "@/components/form/form-button";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({title, id}:BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>
        Board title: {title}
      </p>
      <FormSubmit variant="destructive">
        Delete
      </FormSubmit>
    </form>
  );
};

export default Board;
