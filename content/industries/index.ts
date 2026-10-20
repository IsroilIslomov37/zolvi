import type { Industry } from '@/lib/types'
import clinics from './clinics'
import eCommerce from './e-commerce'
import education from './education'
import fieldService from './field-service'
import hotels from './hotels'
import logistics from './logistics'
import manufacturing from './manufacturing'
import restaurants from './restaurants'
import retail from './retail'
import schoolWebsites from './school-websites'
import tourism from './tourism'

/** Order here = order in menus, the footer and the industry grid. */
export const industries: Industry[] = [
  restaurants,
  hotels,
  education,
  schoolWebsites,
  retail,
  clinics,
  logistics,
  tourism,
  eCommerce,
  manufacturing,
  fieldService,
]
