import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h3 className={styles.brand}>广州智尘梦科技工作室</h3>
        <nav>
          <a href="#">首页</a>
          <a href="#business">业务</a>
          <a href="#contact">联系我们</a>
        </nav>
      </div>
    </header>
  )
}
