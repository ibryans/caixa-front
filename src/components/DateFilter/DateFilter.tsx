import moment from 'moment';

type DateProps = {
    date: string;
    changeDate: Function
}

export function DateFilter(props: DateProps) {

    // Verifica se a data selecionada é o dia de hoje
    const isSelectedDateToday = () => {
        const date1 = moment(props.date).format('DD/MM/YYYY')
        const date2 = moment().format('DD/MM/YYYY')
        return date1 === date2
    }

    return (
        <div className="d-flex justify-content-between align-items-center mt-2 p-3">
            <button className="btn btn-outline-dark" onClick={() => props.changeDate(-1)}>
                <i className="bi bi-chevron-left"></i>
            </button>
            
            <span className={isSelectedDateToday() ? "font-weight-bold text-primary" : ""}>
                { new Date(props.date).toLocaleDateString('pt-br')} {isSelectedDateToday() ? ' (Hoje)' : ''}
            </span>
            
            <button className="btn btn-outline-dark" onClick={() => props.changeDate(+1)} disabled={isSelectedDateToday()}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );

}