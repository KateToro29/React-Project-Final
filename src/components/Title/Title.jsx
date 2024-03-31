import './Title.css'

export default function Title(props) {
  return (
    <>
      <div className='titleParent'>
        <h1 className='title'>{props.Title}</h1>
      </div>
    </>
  );
}
