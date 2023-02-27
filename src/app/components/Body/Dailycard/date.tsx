import React from 'react'

const ChangeDate = () => {
    // get date 
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // Lấy ngày và thêm số 0 đằng trước nếu ngày < 10
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Lấy tháng và thêm số 0 đằng trước nếu tháng < 10
    const year = today.getFullYear().toString().substr(-2); // Lấy 2 số cuối của năm

    const formattedDate: any = `${day}/${month}/${year}`;
    return formattedDate

}

export default ChangeDate