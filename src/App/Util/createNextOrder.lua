return function()
	local order = 0

	return function()
		order += 1
		return order
	end
end
