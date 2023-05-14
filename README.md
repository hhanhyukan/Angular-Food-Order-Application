# Frontend

This project install additionally:

- bootstrap v5.2.3 [npm i bootstrap@v5.2.3]
- font awesome v3.1.2
- folder [extra_img](src/assets/Extra_img/)

## Page & Functionally

- Login, Register, Authentication (User)
- (HomePage)
- Menu (filter by tag & input), Cart, Food Details
- Order & Order Confirm (Payment - stripe.com)
- Other: User profile, toast, lazy loading
- Upcoming: CRUD

## Note

- Flow: pick food -> cart -> order page -> order confirmation (admin comfirm order's status) -> payment
- Order page: valiate (address, food amount > 0), address & time set locally
- register.html - ngif validator['notSame'] ('PasswordsMatchValidator') didnt display
- create recipe: InputGroup (price), EditorModule (desc)
- rating star decimal: https://codepen.io/scottb/pen/KdYgRK
- order list restyle

## Pending features

| Feature     |           Note           |     Status     |
| ----------- | :----------------------: | :------------: |
| Lazy module |       more routing       |  `Processing`  |
| Test case   |         spec.ts          | `Pending Last` |
| Email magic | forgot pass, remember me |   `Pending`    |
| More        |      CRUD features       | `Pending Last` |
| Admin role  |                          | `Pending Last` |
| Debounce    |       prevent spam       |   `Pending`    |
| Multi-lang  |        VN, EN, JP        | `Pending Last` |

### Other:

- Color Pallete:

  - Light: #F5F5F5 | #e5e9ea | aliceblue
  - Dark: #000 | #333
  - Other variant (hot -> cold): #f8d095 > #e19f49 > #8d4821 > #452a19

- Failed Consideration: sticky nav
