type DateProps = {
    date: string;
    changeDate: Function
}

export function DateFilter(props: DateProps) {

    return (
        <div className="d-flex justify-content-between align-items-center mt-2">
            <button className="btn" onClick={() => props.changeDate(-1)}>
                <i className="bi bi-chevron-left"></i>
            </button>
            
            { new Date(props.date).toLocaleDateString('pt-br') }
            
            <button className="btn" onClick={() => props.changeDate(+1)}>
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );

}