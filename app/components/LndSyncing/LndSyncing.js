import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaCopy } from 'react-icons/lib/fa'
import styles from './LndSyncing.scss'


class LndSyncing extends Component {
  componentWillMount() {
    this.props.fetchBlockHeight()
  }

  render() {
    const { fetchingBlockHeight, syncPercentage } = this.props

    return (
      <div className={styles.container}>
        <header>
          <section>
            <h3>zap</h3>
          </section>
          <section className={styles.loading}>
            <h4>50%</h4>
            <div className={styles.spinner} />
          </section>
        </header>
        
        <div className={styles.aliasForm}>
          <h1>What should we call you?</h1>
          <p>Give yourself a username to help others connect with you on the Lightning Network</p>

          <div className={styles.inputContainer}>
            <input
              type='text'
              placeholder='bcash bcash bcash bcash'
              className={styles.input}
              autoFocus
            />

            <div className={styles.submit}>
              Submit
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <section>
            <h2>Fund your Zap wallet</h2>
            <p>Deposit to your wallet while your node is syncing so autopilot can start working magic for you</p>
          </section>
          <section>
            <div className={styles.address}>
              <span>2N9XC9e2wucq2Fzf8CqZGPU12Kq8H39vFxT</span>
              <span className='hint--left' data-hint='Copy Address'>
                <FaCopy />
              </span>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

LndSyncing.propTypes = {
  fetchBlockHeight: PropTypes.func.isRequired,
  fetchingBlockHeight: PropTypes.bool.isRequired,
  syncPercentage: PropTypes.number.isRequired
}

export default LndSyncing
