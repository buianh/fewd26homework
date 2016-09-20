clear
*import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("TFP_transpose") firstrow
*reshape long y, i(Cty) j(time)

*save "R:\Mai_Anh\Sandy\new_tfp.dta", replace
*clear
import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("L_transpose") firstrow
reshape long y, i(Cty) j(time)
rename y labor
save "R:\Mai_Anh\Sandy\labor.dta", replace
clear
import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("K_transpose") firstrow
reshape long y, i(Cty) j(time)
rename y capital
save "R:\Mai_Anh\Sandy\capital.dta", replace
clear
import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("pot_GDP_transpose") firstrow
reshape long y, i(Cty) j(time)
rename y pot_GDP_eviews
save "R:\Mai_Anh\Sandy\pot_GDP.dta", replace
clear
import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("real_GDP_origin") firstrow
reshape long y, i(Cty) j(time)
rename y realgdp_GDP_eviews
save "R:\Mai_Anh\Sandy\real_GDP.dta", replace

clear
import excel "R:\Mai_Anh\Sandy\TFP.xlsx", sheet("TFP_eviews_transpose") firstrow
reshape long y, i(Cty) j(time)
rename y tfp_trend_eviews
*merge 1:1 Cty time using "R:\Mai_Anh\Sandy\new_tfp.dta"
*drop _merge
merge 1:1 Cty time using "R:\Mai_Anh\Sandy\labor.dta"
drop _merge
merge 1:1 Cty time using "R:\Mai_Anh\Sandy\capital.dta"
drop _merge
merge 1:1 Cty time using "R:\Mai_Anh\Sandy\pot_GDP.dta"
drop _merge
merge 1:1 Cty time using "R:\Mai_Anh\Sandy\real_GDP.dta"

by Cty: gen pot_GDP_calculated = tfp_trend*( labor^0.7)*(capital^0.3)
*rename y tfp
sort Cty time
by Cty: gen pot_GDP_difference = 100*( pot_GDP_eviews- pot_GDP_calculated)/ pot_GDP_calculated
*by Cty: gen realGDP_calculated = tfp*( labor^0.7)*(capital^0.3)
by Cty: gen TFP_calculated = realgdp_GDP_eviews/((labor^0.7)*(capital^0.3))
egen country_no =group(Cty)
tsset country_no time
tsfilter hp y_cylc = TFP_calculated, trend(tfp_trend)

*gen tfp_diff = tfp- TFP_calculated
sort Cty time
by Cty: gen tfp_growth = 100*(TFP_calculated[_n]/TFP_calculated[_n-1]-1)
by Cty: gen pot_GDP_growth = 100*(pot_GDP_calculated[_n]/pot_GDP_calculated[_n-1]-1)
by Cty: gen real_GDP_growth = 100*(realgdp_GDP_eviews[_n]/realgdp_GDP_eviews[_n-1]-1)
