import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(task =>(
            <tr key={task._id}>
                <td className={task.done ? 'markedAsDone': ''}>{task.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={task.done}
                        onClick={() => props.handleMarkAsDone(task)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!task.done}
                        onClick={() => props.handleMarkAsPending(task)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!task.done}
                        onClick={() => props.handleRemove(task)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}