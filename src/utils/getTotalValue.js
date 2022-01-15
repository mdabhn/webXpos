export const totalAmount = (itms) => {
  let total = 0
  itms.map((i) => {
    total += i.price * i.qty
  })

  return total
}
