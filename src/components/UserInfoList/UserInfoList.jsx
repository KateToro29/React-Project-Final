import { useEffect, useState } from "react";
import { UserItem } from "../UserIntem/UserItem";
import './UserInfoList.css'

export default function UserInfoList(props) {
  const itemByPage = 3;
  const [actualPage, setActualPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [listSlice, setListSlice] = useState([])

  useEffect(() => {
    setPages(
      Math.ceil(props.list.length / itemByPage)
    )    
  }, [props.list]);

  useEffect(() => {
    const start = (actualPage - 1) * itemByPage;
    const end = actualPage * itemByPage
    setListSlice(props.list.slice(start, end))
  }, [pages, actualPage])

  const defineNewPage = (up) => {
    if(up){
      if (actualPage < pages){
        setActualPage(actualPage + 1);
      }
    }else {
      if (actualPage > 0){
        setActualPage(actualPage - 1);
      }
    }    
  }


  return (
    <>
      {listSlice?.length > 0 ? (
        <div>
          <div className="ContainerCardpresent">
            {listSlice.map((user) => (
              <UserItem key={user.id} user={user} showDeleteButton={props.showDeleteButton} />
            ))}
          
          </div>
          <div className="pagination">
            <span>
              {actualPage} de {pages}
              {actualPage > 1 && <button onClick={()=> defineNewPage(false)} > &lt; </button>}
              {actualPage !== pages && <button onClick={()=> defineNewPage(true)} > &gt; </button>}
            </span>
          </div>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}
