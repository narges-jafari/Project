import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Layout, { Content } from 'antd/lib/layout/layout'
import { Table, Row, Col } from 'antd'
import styles from '../../assets/styles/Main.module.css'
import axios from 'axios'
import 'antd/dist/antd.css'

const Main = () => {
  const [data, setdata] = useState([])
  const [modaldata, setmodaldata] = useState([])
  const [showText, setShowText] = useState('')
  const [submittedInput, setSubmittedInput] = useState('')
  const [showEmail, setShowEmail] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  const [showName, setShowName] = useState('')
  const [showAddress, setShowAddress] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  // filter
  const filtered = !submittedInput
    ? data
    : data.filter((person) =>
      person.name.toLowerCase().includes(showText.toLowerCase())

    )

  // Header of table
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'

    },
    {
      title: 'Email',
      dataIndex: 'emailss'

    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Edit User',
      dataIndex: 'id',
      render: (index, record) => (
        <Button key={index} type='primary' className='rounded-3' onClick={() => showModal(record)}>
          <i className='fa fa-edit' />
        </Button>
      )
    }
  ]

  // Save data from Rest API and number of result
  useEffect(() => {
    getData()
  }, [], localStorage.setItem('data', JSON.stringify(data)), [data],
  localStorage.setItem('filter', JSON.stringify(filtered)), [filtered], localStorage.setItem('submit', JSON.stringify(submittedInput)), [submittedInput])

  // Cancle Modal
  const handleCancel = () => {
    setIsModalVisible(false)
    window.location.reload(true)
  }

  // Show Modal
  const showModal = (record) => {
    console.log(record)
    setmodaldata(record)
    setIsModalVisible(true)
  }

  // get user data
  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?')
    setdata(
      res.data.map((row, index) => ({
        key: index,
        id: row.id,
        name: row.name,
        emailss: row.email,
        address: row.address.city
      }))

    )
  }

  // Update user
  const rand = Math.floor(Math.random() * 10) + 1
  const componentDidMount = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id = rand}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: showName,
        email: showEmail,
        address: showAddress,
        id: rand
      }),
      headers: {
			  'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((response) => {
      if (response.status === 200) {
        console.log(response.json())
        setShowName('')
        setShowAddress('')
        setShowEmail('')
      }
    }
    )
  }

  return (
    <Layout>
      <div className={styles.contentCss}>
        <input
          value={showText}
          placeholder='search by name'
          onChange={e => setShowText(e.target.value)}

          className={styles.inputCss}
        />

        <button onClick={() => setSubmittedInput(showText)} className={styles.buttonCss}>search</button>
      </div>

      <Content className={styles.tableContentCss}>

        <div className={styles.tableDivCss}>
          {!submittedInput
            ? <Table
                scroll={{ x: true }} dataSource={data} columns={columns} pagination={{ className: 'pagination mx-4', defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10'] }}
              />
            : <Table scroll={{ x: true }} dataSource={filtered} columns={columns} pagination={{ className: 'pagination mx-4', defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10'] }} />}
        </div>
        <Col span={3} />
      </Content>

      <Modal show={isModalVisible}>
        <Modal.Header style={{ backgroundColor: '#ddd' }}>
          <Modal.Title>Edit User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <button value={showEdit} className={styles.editButton} onClick={e => { setShowEdit(e.target.value) }}><i className='fa fa-edit' /> edite</button>
          <br />
          {!showEdit
            ? <>
              <div className={styles.modalBody}>
                <div> <span>Name:</span> {modaldata.name}</div>
                <div><span>Email:</span> {modaldata.emailss}</div>
                <div><span>Address:</span> {modaldata.address}</div>
              </div>
            </>
            : <>
              <div className={styles.editForm}>
                <span>Name:</span>  <input className={styles.editInput} value={showName} onChange={e => { setShowName(e.target.value) }} />

                <br />
                <span>Email:</span>   <input className={styles.editInput1} value={showEmail} onChange={e => { setShowEmail(e.target.value) }} />
                <br />
                <span>  Address:</span><input className={styles.editInput2} value={showAddress} onChange={e => { setShowAddress(e.target.value) }} />
              </div>
            </>}

        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCancel}>
            Close
          </Button>
          {showEdit
            ? <Button variant='primary' onClick={componentDidMount}>
              Save
            </Button>
            : null}

        </Modal.Footer>
      </Modal>
    </Layout>

  )
}

export default Main
