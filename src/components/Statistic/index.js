
import './Statistic.scss'

function Statistic(props) {
    const { icon, value, label, color='', rev=false } = props;
    return (
        <>
            <div className={'statistic ' + (rev ? 'statistic--rev':'')}>
                <div className={'statistic__icon ' + (color && `statistic__icon--${color} `) + (rev ? 'statistic__icon--rev':'')}>{icon}</div>
                <div className={'statistic__info ' + (rev ? 'statistic__info--rev':'')}>
                    <div className='statistic__value'>{value}</div>
                    <div className='statistic__label'>{label}</div>
                </div>
            </div>
        </>
    )
}

export default Statistic;