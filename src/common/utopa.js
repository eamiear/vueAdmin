/**
 * Created by skz on 2017/10/17 18:15
 * Method Of Utopoa
 */
export const Utopa = {
  isValidRequest (response) {
    return (response.status === 200 && response.data.code === 0)
  }
}
