use "R:\Mai_Anh\Sandy\TFP_Sandy.dta", clear

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

sort Cty time
by Cty: gen gk = 100*(capital[_n]/capital[_n-1]-1)
by Cty: gen gl = 100*(labor[_n]/labor[_n-1]-1)
by Cty: gen gk03 = 0.3*gk
by Cty: gen gl07 = 0.7*gl
by Cty: gen ggrowth = tfp_growth + gk03 +gl07
