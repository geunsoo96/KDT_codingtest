def cone_volume(r, h):
  pi = 3.14
  radius = r**2
  if r >= 1 & r <= 100 & h >= 1 & h <= 100:
    return (pi*radius*h)/3

value = cone_volume(1, 3)
print(value)


# if(r >= 1 && r <= 100 && h >= 1 && h <= 100)
