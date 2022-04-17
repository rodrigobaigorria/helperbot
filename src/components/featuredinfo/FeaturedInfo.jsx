import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Atendidos</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">650</span>
              <span className="featuredMoneyRate">
                  -11.4 <ArrowDownward className='featuredIcon negative' />
              </span>
          </div>
          <span className="featuredSub">Comparado con el ultimo mes</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Derivados</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">120</span>
              <span className="featuredMoneyRate">
                  -1.4 <ArrowDownward className='featuredIcon negative' />
              </span>
          </div>
          <span className="featuredSub">Comparado con el ultimo mes</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">En seguimiento</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">23</span>
              <span className="featuredMoneyRate">
                  +2.4 <ArrowUpward className='featuredIcon' />
              </span>
          </div>
          <span className="featuredSub">Comparado con el ultimo mes</span>
      </div>
     
    </div>
  )
}
