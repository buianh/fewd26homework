'Objective: To create the Macro table
'Author: Anh Mai Bui

''' Select the monthly workfile, calculate exchange rate US$/LCU, and calculate month-on-month change.

pageselect m
group temp *lcuperusd
for !i=1 to temp.@count
  %cty=@left(temp.@seriesname(!i),3)
  genr {%cty}usdperlcu=1/({%cty}lcuperusd)
  genr {%cty}usdperlcumom=@pc({%cty}usdperlcu)
next
delete temp

