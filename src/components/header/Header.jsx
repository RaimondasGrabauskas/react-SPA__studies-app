import css from './Header.module.css';

const Header = ({onToggleList, onShowList}) => {
  return (
  <header className={css.header}>
    <div className={css['header-item']}>
      <h2>Wanna see graduated studies press button</h2>
      <button onClick={onToggleList}>{onShowList ? 'Hide list' : 'Show list'}</button>
    </div>
  </header>
  )
}

export default Header
