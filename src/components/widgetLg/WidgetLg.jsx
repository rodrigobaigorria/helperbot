import './widgetLg.css';
import avatar from '../../assets/img/avatar.jpg';


export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Ultimos chats</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Canal</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={avatar} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Keller</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">Whatsapp</td>
          <td className="widgetLgStatus"><Button type='Exitoso'/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={avatar} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Keller</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">Web</td>
          <td className="widgetLgStatus"><Button type='Fallido'/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={avatar} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Keller</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">Web</td>
          <td className="widgetLgStatus"><Button type='Pendiente'/></td>

        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={avatar} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jhon Keller</span>
          </td>
          <td className="widgetLgDate">2 jun 2022</td>
          <td className="widgetLgAmount">Facebook</td>
          <td className="widgetLgStatus"><Button type='Exitoso'/></td>

        </tr>
      </table>
    </div>
  )
}
