
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux"
import { getList } from "../../store/studiesRedux";
import CardItem from "./CardItem";
import css from "./StudiesCardList.module.css"


const StudiesCardList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.list.list);

  
  useEffect(() => {
    dispatch(getList());
  }, [dispatch])
  
  const  filterOnlyFinishedStudies = (data) => {
   return (data || []).filter((study) => study.statusKey === 'finished');
  }

  return (
    <section className={css['list-section']}>
      <h2>List of studies</h2>
      <div className={css['list-container']}>
        {filterOnlyFinishedStudies(data).map((item) => (
          <CardItem 
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default StudiesCardList
