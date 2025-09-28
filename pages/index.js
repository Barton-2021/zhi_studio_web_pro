/*
 * @Author: Chen_陈工
 * @Date: 2025-09-28 22:39:27
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-09-28 23:06:48
 * @FilePath: \zhi_studio_web_pro\pages\index.js
 */
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import Image from 'next/image'
import myWechat from '../sources/img/my_wechat.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>广州智尘梦科技工作室</title>
        <meta name="description" content="广州智尘梦科技工作室 — 鸿蒙+AIOT 智能产品与技术服务" />
      </Head>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Reveal>
              <h1 className={styles.title}>广州智尘梦科技工作室</h1>
              <p className={styles.lead}>
                成立于 2024 年 3 月，专注于鸿蒙 + AIOT（人工智能物联网）技术的研发与应用，打造智能产品与智慧生活。
              </p>
              <div className={styles.ctaRow}>
                <a className={styles.cta} href="#business">了解我们的服务</a>
                <a className={styles.secondary} href="#contact">联系我们</a>
              </div>
            </Reveal>
          </div>
        </section>

        <div className={styles.main}>
          <Reveal className={styles.card}>
            <h2>企业宗旨与发展理念</h2>
            <p>
              宗旨：创新、卓越、至诚、立信。
            </p>
             <p>
              发展理念：五个“一”：一群人、一条心、一件事、一起拼、一定赢。
            </p>
          </Reveal>

          <Reveal className={styles.card}>
            <h2 id="business">主营业务范围</h2>
            <ul>
              <li>计算机软件技术开发</li>
              <li>硬件设备开发</li>
              <li>物联网技术开发</li>
              <li>人工智能技术开发</li>
              <li>基于云平台的业务外包服务</li>
              <li>互联网安全服务与信息技术服务</li>
            </ul>
          </Reveal>

          <Reveal className={styles.card}>
            <h2>我们的愿景</h2>
            <p>
              打造科技梦工厂，开发并推广一系列具有市场竞争力的智能产品，满足用户对高品质生活的需求。
            </p>
          </Reveal>
        </div>
      </main>
      <section id="contact" className={styles.contactSection}>
        <div className={styles.main}>
          <Reveal className={styles.card}>
            <h2>联系我们</h2>
            <div className={styles.contactGrid}>
              <div>
                <p><strong>姓名：</strong>陈工</p>
                <p><strong>手机号：</strong>189-3343-2872</p>
                <p><strong>邮箱：</strong>2969823274@qq.com</p>
              </div>
              <div className={styles.qrWrap}>
                <p>扫描微信二维码添加我们</p>
                <div className={styles.qr} aria-hidden>
                  <Image src={myWechat} alt="微信二维码" width={140} height={140} className={styles.qrImage} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </div>
  )
}
