import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const NavigationButtons = () => {

return(
    <>
    <div>
<Button
type="button"
variant="danger"
size="sm"
// onClick={() => lastCharacterArray(expense.id)}
>
Last Page
</Button>
</div>
<Button
type="button"
variant="danger"
size="sm"
// onClick={() => nextCharacterArray(expense.id)}
>
Next Page
</Button>
</>
)
}
NavigationButtons.propTypes = { starWarsData: PropTypes.object.isRequired }
export default NavigationButtons