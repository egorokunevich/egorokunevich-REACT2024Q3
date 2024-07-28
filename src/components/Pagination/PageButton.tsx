interface PageButtonProps {
  txt: string;
  isActive: boolean;
  handleClick: (pageNumber: number) => void;
}

const PageButton = (props: PageButtonProps) => {
  const { txt, isActive, handleClick } = props;
  return (
    <button
      style={{
        color: isActive ? 'white' : 'black',
        backgroundColor: isActive ? '#2291be' : '#f9f9f9',
        outline: 'none',
        maxWidth: '55px',
        width: '100%',
        padding: '0.6em',
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (+txt) {
          handleClick(+txt);
        }
      }}
    >
      {txt}
    </button>
  );
};

export default PageButton;
