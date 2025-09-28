import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <p>© 2025 广州智尘梦科技工作室（个人独资）
          &nbsp;|&nbsp;
          <a className={styles.icpLink} href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            粤ICP备2025387170号-1
          </a>
        </p>
        <p>主营：鸿蒙 + AIOT 智能产品与信息技术服务</p>
      </div>
    </footer>
  )
}
