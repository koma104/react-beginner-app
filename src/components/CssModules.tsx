import styles from './CssModules.module.scss'

export const CssModules = () => {
  return (
    <div className={styles.container}>
      <p>- CssModules -</p>
      <button>fight!</button>
    </div>
  )
}