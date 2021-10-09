import css from './CardItem.module.css';

const CardItem = ({item}) => {
  return (
    <div className={css.card}>
      <img src={item.studyThumbnail} alt="" />
      <h5><strong>Studio program:</strong> {item.name}</h5>
    </div>
  )
}

export default CardItem
