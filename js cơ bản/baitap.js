const queryId = (id) => document.getElementById(id)

const totalBill = queryId("totalBill").value

queryId("tinhNgay").onclick = function tinhNgay(totalBill) {
     console.log(totalBill)
}