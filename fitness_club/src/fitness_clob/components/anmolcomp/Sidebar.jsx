import { Box, Img } from "@chakra-ui/react";
import data from "../../alldata/sidebar.json";
import Activity from "../../Pages/anmolpages/Activity";
import Styles from "../../css/sidebar.module.css";
const Sidebar = () => {
  const { name } = data;
  console.log("i am name", name);
  return (
    <div style={{ border: "1px solid black", height: "50vw" }}>
      <Box className={Styles.innerbox}>
        <Box style={{ border: "1px solid black", width: "20%" }}>
          <Box className={Styles.activity}>
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACoUlEQVR42sVUS2gTQRhOqmkb8sK6ze4mm+zO7ibZmQ1RaXuISUGtbZOmSWYLEcQH9uDFgwe9iWehiEWkCB7Ex0kP4kHx4gOvngSLgujBUiJVPIhQFfH1T5hiJKFJvbjwscw//3zzf/9jXK7/9elpZxqwqBPnvY7LxxQl6wWz+98J7eqCbju/GDRcvioIWAbz5q4JTLPYBwgSUvPrQ7WQhp15IPuJSPWNrGYdcBkAeLoiEzMTPmQ7R5FNb8D/mo7pLSBbZoTxxORcX3AwIRu7h2Jm0XC5aps6EqqZMoLDTwDfdJuuwP/7mlyEyw+01NQc2JcRqVwKKlkWac+6hBqh2+HwSxWXrwvK8C6EK4/XCP+ArsQTheN+vxjuKF0n1Vk49CWWHD/h9Q4oOqk8+ouM0Hcyyh8CV1aYYKfiuPU0PWPYtC6pO0vRxNg0kLzlZJ+RVboraaNHwC8KCPHo1m0ft0oqO2LJCSoIVhLkLjRF9lFWcweaIvN024ssyf3hcFpEmN5plgtt80yzSvOqVZqRzOLgRpq7ESkk/zknWgIswnq1sbbpByA9KYoZX1ekZmZGMQi9ycleRbT8bDgyPB7R98zC+gWzq7h0MRCICB0nRsfVvXDgHs/baxmNHgRzBLBlq7ItyiKFy+pSPF/jE9Oe0ExTAySdM2ynziN7CpHt52SNIiBcPQx7X2Geb/NKBwCt02IQ5yyfDpb8VZBzWYyOjMGW1FTRHrjwCm/sT2qicBpeHbPtpIDTDwZ2s4Ry+yA3KTCz/Pi4JDdPx5RqlS+oePq+ZlUexlMFlo7elsIwmWzEQkJqmL0PPKq+ltsJ6fWLmTDrUTmey0vxERus3hY/kHA+lpw8xSX6eF7atYOb77Go+jnaNriHJziwgYfT3YTG9xvU0LksYfIzBAAAAABJRU5ErkJggg==" />
            <span className={Styles.links}>Activity</span>
          </Box>
          <Box className={Styles.activity}>
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACnklEQVR42uWUXUhTYRjHd9dFFH1o2zyVbjvoNiOaYLcSQQiRZEjdRJcW2EUEFZJKF4E3QQTeRNZlQV1U0IVBVleZmoU6bXPu+8vNfbkd93Xm/j3vO4eCmxp01wsP5xw474///3n+76tQ/L+rv/3w1YH2muG/LbavKgy7WcUiimsFyLksMsk4KkLLsGw6iXx2FYVcBgU5hx9vh/DowgE8PKPgNfLkJhJLHkR9doRdFiwtzsBv/Yl7XSZ3RWAuLUHOZ7FWkLGaWCbYQQx3tyCXkfC67yKHmkdfIRZwYtltJeAs/JYdgIV8jlvKJGMYfXqXAC8JuLoB/LQBDDnNOwPLCovFNbIt81696e/ksPeD17AS9hHQsaFwO8tZaQV5UiNnSz1kcNvYBw77+mIAqegSEkEPYn47AS0I2qiHlqnqwHQqjoyUJKUpAktccWhxGh+HbtHGSSQjAcQDLhqKDWHnPAGn4ZufrA6UYmEaRhQZBqZKUyyYMqbwy/P76xNet2s3I0D9885NVAbKFBWmgNmSYiFI8TC9hwjUx4Gfn/WSVQcingWEHCV1zK5nbrwyML0S5XYSIS9vfLmYqnjQhRhlL+JdoPz9RtBeiotvfgLu2bGtwPJJiXgXecNZLOJBJ3+y74jXVoqJYw5BmmzAyqxOwmP+zmHbHr9qxSLCbAYWfqG30zDOQFVhu704/NYpbnOLxc1LFMU9h0Rxf22DUSVo9Y0qbXNrnUZ/TtAYLws64/U6neFOndb4oOP0sXfdbaop98w33L5kiqp1hk5Vg75NaDCeUtY3aVSiWKtUntyrqGlq2ldfb1BvhhHkiqA13lBr9b0EGxS0hseszrceH+lpb3T1dJicap2+W9A0d9F/Z9WioeWorlk8ojmh/Of36h8VB8Hx20/i6AAAAABJRU5ErkJggg==" />
            <span className={Styles.links}>Invitations</span>
          </Box>
          <Box style={{ marginTop: "15px" }}>
            Friends
            <Box className={Styles.activity}>
              <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAByklEQVR42rWSPSxDURTHS0zCIMEgJCyaSLSItJS2T16KtojYbGLtIpUQ8bWwSITNQMReLBITE5vNYBE2k48Q7/vjHvdcfY+q92jDefnnnLx37u/8z83zeP4ruNhIZzQ2PF6M8GweED88PD7D/dNLwcKz3wKvrm+hGDkCBUkBQZJBEGV4FSWWBfH9nSgrIKEUFWRFA0XVQNV00DTDGSjKKkAmAZ70CRPWkgWSEUSlfoLpBuiGCxAnIyS1tg5NcweslrOOrCFfZbgBVTp5bGULvAsZ1lw9c8TcKKqeXY9mPeuMuTPBME0XoJ49ZEuzQQixVkQZFGaaKOIMxKnKTYO9DtZ6HoiKQgxCYYQAIW5AOhUhEztLULeYYTU6wfdOd0gAnIG4wuTuEpTPHrPmmvlDdke4FhN1RUx0BcyZFY5AbLLWyM3vAERYGT54zkDs2hTv7HWwJvaTw8gJFyAwSPL4Eho3zllthdMd/gjs2LuAsplTKJmm/+HKGfwmvgCXS1s4riLCJ1JQZPTyQ+nW3mQVx3FlHm9PT2V7INYZDMenQtHB7a5IfL9QBcIDq/5ufsgX6q+1HfqCXD2C27r50ULkD/J9/gDfbDv863gDlwdICgo44/8AAAAASUVORK5CYII=" />
              <span className={Styles.links}>Friend List</span>
            </Box>
            <Box className={Styles.activity}>
              <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAq5JREFUeNq0VEtPFEEQ/ma2gWU1QnisIgRfYIzRiyc94E35B8ab8Qfo0eC/8GLijaMXjSEcJXIxmxAPGDy4CZqNARGFBYKsuzvTD6uqezegY4xGJ6npnprqr756dEXOOfzLJ/pvgOV3a+4XFoCLfgt0buy4GKmWwjqL8+MjsnfwILx6f/wtWvm2rmXjvysf1tvAbUBjrKzPykJLDqc2AmsbJqI9kJAysV6atNdkdf+ihrX2Z0DnjHgU8CA7GxWUF+bRaNSRK/SieGECnQOjSODBEmuEqTUZgJooWP5J7OR/DCy9eILK0ivxw5xre7sYnbwNq7qQkJG2PmRjTRswbufQeoZsZEKevn3dJWNyQ2JIsf56HtXlRaQMRsaG3HPutckA1NoEbz5XlDYU+ofBXWC5ILyS06RZh3ZWHKXsjG11FqBJpZq6lUN6HRk6Q7FGknQW1VtE59GTBOg8ywCojc4O2UmiqbpktEs2g2cvoaunKB3Aki+eQkygzMwwS2k3Zp4BKEUJYPzkKGTdUUC+p1/CY4kP98LGHZJPhmCWTCJNs6qsUwlP5agYzQZqmx+xvDCH6sp7AeOCbSy9pDwUkR8Zhxo8IQWBi4l9mtHYdKhTxajvbaKyWMKbuaeobX3hfpHbx2tjewMrs4+QP3YaA5O3oAaGKaq+9qU4ELIL3f629Jz6bwa1nSrFnYPLKTilZEVY69U1fJp5iK3SrK/+vrY5cPWa2uHB3Zuwd26QA+cTz96tv7vWX/pwp124z+4AQ3Xl6vWY1N1T96aQ6kTaIEJolXD5/ZBwYXD4yiIMjlZ/Ek4fKWuKdMOUniFrg4GwaYEFVj8C8yTaN3H4LD1j9N5WYdJFq6srmJ5+/NeD1UmPkFyeuMaF6SZFDyn6aV+k/aE/wPpMssnDic7XvgswAPDL5dFvy5o6AAAAAElFTkSuQmCC" />
              <span className={Styles.links}>VIew My Profile</span>
            </Box>
            <Box className={Styles.activity}>
              <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUVJREFUeNrUlLFOAzEMhh0JwQSdkKBsZenGwyCegJknYOUteATehI2RAVgQRRXt1I3E5k9ySeNcL7ewtJJrny/3xX/sOyMi9J8/s19A83yLf1w77+A5mJCLsYGJYxPylpHDOsck10+ZcaDwnh0gyXfmOHjJIJ/r8k4r1MAMS7tLjF0BLkHp/iDQLxDZwkJlxcNdpWTLDVpALuSUldmiYleA0nWjQlHSuJIXY1EbRaAZlpxl0g4YV5vJiGTr9MIU585yPL98JF2+2RR18D252qexGgZiaPsPS1Wx2coem0Nbyew1h/Qopc43gbVEbsTjkuuO0u6uJ5CMdplp9vBxiKE6wUmdInP+fjdVr9nscXmD/Bfe+wX8GhO4oXuyg5+vy/nVERZPKAKniC8Qn8EfY6MVVnvQJ+wb9gPbvL2+/O7PB/ZPgAEAgoeZzX/7aNsAAAAASUVORK5CYII=" />
              <span className={Styles.links}>VIew My Profile</span>
            </Box>
            <Box style={{ marginTop: "15px" }}>
              Groups
              <Box className={Styles.activity}>
                <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAByklEQVR42rWSPSxDURTHS0zCIMEgJCyaSLSItJS2T16KtojYbGLtIpUQ8bWwSITNQMReLBITE5vNYBE2k48Q7/vjHvdcfY+q92jDefnnnLx37u/8z83zeP4ruNhIZzQ2PF6M8GweED88PD7D/dNLwcKz3wKvrm+hGDkCBUkBQZJBEGV4FSWWBfH9nSgrIKEUFWRFA0XVQNV00DTDGSjKKkAmAZ70CRPWkgWSEUSlfoLpBuiGCxAnIyS1tg5NcweslrOOrCFfZbgBVTp5bGULvAsZ1lw9c8TcKKqeXY9mPeuMuTPBME0XoJ49ZEuzQQixVkQZFGaaKOIMxKnKTYO9DtZ6HoiKQgxCYYQAIW5AOhUhEztLULeYYTU6wfdOd0gAnIG4wuTuEpTPHrPmmvlDdke4FhN1RUx0BcyZFY5AbLLWyM3vAERYGT54zkDs2hTv7HWwJvaTw8gJFyAwSPL4Eho3zllthdMd/gjs2LuAsplTKJmm/+HKGfwmvgCXS1s4riLCJ1JQZPTyQ+nW3mQVx3FlHm9PT2V7INYZDMenQtHB7a5IfL9QBcIDq/5ufsgX6q+1HfqCXD2C27r50ULkD/J9/gDfbDv863gDlwdICgo44/8AAAAASUVORK5CYII=" />
                <span className={Styles.links}>Recent Posts</span>
              </Box>
              <Box className={Styles.activity}>
                <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAACqElEQVR42u2VW0gUURjHjy4VXWzFECOXLlAvQU8FvgRBUXtVsiykEqIoCIqUnZ0KgjGJHoK0dmbWiswIEpmHImxnxloyCSpD58zKBoEhQdFDaQSZFC1t37fMqK1nVkN668Cf2bn9f9/tzBIyw4qqRin5VwvM18s6PS9pNCOqtB8l60ZnTDW22PBY98DGOUHQEAFM6eY5STUPTbn2Q9ToAzE+uGH2gPjL5XJPaomtZj1VIulGHZiZE8aqcUzSaSwngPGYToOzgiytPutzhfiuAh83BvrsCvIdZbVNFVce0nVglLQMR7FkcEzngL60dpnl+Ql+bisYj6B5QTCScAX4XuLjvsH5kHu3sElW6X476mbl2UJWOWXVqHEGVDYuIl4OTUfK9jXVYpmOXlPc80JnjsC174WBSIeU6FtmmymK4mJkkpE1ejBPFrwHzNLEF25HM2ympNKbUXVogcvP90I2o233XxdZZsNid3INezjMamfIdn4FQH6CrkbVpAca+wJBaAxlewyQrzZE1swbomYcZkDSlx/1r3SG7KwvBsAH0BsS4CqkuLEKm+veI9QgAAYgPpEJThZOGAOCZWQDBKEQzC+CMpbeEn+klXjDbfD7I0A+le4VAhB9lV0SON5lQF45A7xcyyQgnILj08nzSMJTd2GXNbI9ALgtauYBVhZQxs1siI+7NCUDMD+9mlTxRdlBCDWUkx3cYkkztoF5ItsPfWAtgqZBVHon3944Bea/IOLnWVNrwUv18PI70HvQmG2GjRV1ep2RSbszxNtQArXvBFglnrbco8Wybh7HXc0aUfx0sPoBk/jEuenWykao0UbWBsv9RoFuiapxAhv95z1jEAMUlNT8aQB4oG8GY7agDwjDv4Kce8NQ0pO5kMwcNI5TxQqU/F9/u34D1hsANHnoSRcAAAAASUVORK5CYII=" />
                <span className={Styles.links}>Find Group</span>
              </Box>
            </Box>
            <Box style={{ marginTop: "15px" }}>
              Profile
              <Box className={Styles.activity}>
                <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACaElEQVR42uWUS08TURiG+Re69ge4FEEXEjFgogvEiBp14YJETMRKCVSuLQgJQWKBggnKLTViYhBNJMrGWwyhlUp0AQgJCja0lOnQzn3mDK/nTIHSzK5xYeIkT95vznfmOd/MYnJy/s/L2zt84YFv6KHXN/Q4G7p9wz3e3pGSPSGTGQbRTdMk2aBpusKk6QnpKazxYhEY+6aic+Irmsdm0PFZxL1ZoC1kgl2nXH0W+2uGYRgadfRnCAkxyfgy0PN2HmfOX0RBYRHKO5+hLmigKUhgbm9j26TQNKnftDKFput2oa6bZGwJuD85j+KSMuTn5eLczQY4Pgi4+8WAQUjmVMTcqxVVswtl1SCDC0DfnIxLtz3IP5aPq13jqJwBqqYVOoVBIek0DKtWKZKs2IWCrJFHP0C/WwylFQ3IzTuO0pYRlL8X4AiYkDU9Y8LUZKm1pCjbhQlRIbX+jyi+UoEjBaeRe6IIRwvP4uSNRpSNBkAPhCBRZNWqRUmFSGuWfFKyC3lBJluiAiqGlUIq99YElaJY7PZ2k+NFu5Dbkojb/wbhWALXOvxYCXOIJyXrlRbXNnC96ymi8SRWozxankzhVzQOLiEhnpAR4wS7MMYL5GeEQ/XABL6vrMM58BKhpd/Y4AVcbh9FcGEVt/qf0wN5zC2HUTf0GuubCWxuSYjEEpnCbt/gSJQTYBEXEOFEKy1YnQHr7+zd2c9gjkxhPN3Mhv3CQ5UOV727tWuy0d0x5Wpoe1db1/qpurZ5uqqmKXCnun7W4awPsWT3bJ312T62nz3nafe+qnF5nNR1wBJSDv8FmOfgv/9v/QN/GB+1Fl5VYgAAAABJRU5ErkJggg==" />
                <span className={Styles.links}>Edit Profile</span>
              </Box>
              <Box className={Styles.activity}>
                <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAq5JREFUeNq0VEtPFEEQ/ma2gWU1QnisIgRfYIzRiyc94E35B8ab8Qfo0eC/8GLijaMXjSEcJXIxmxAPGDy4CZqNARGFBYKsuzvTD6uqezegY4xGJ6npnprqr756dEXOOfzLJ/pvgOV3a+4XFoCLfgt0buy4GKmWwjqL8+MjsnfwILx6f/wtWvm2rmXjvysf1tvAbUBjrKzPykJLDqc2AmsbJqI9kJAysV6atNdkdf+ihrX2Z0DnjHgU8CA7GxWUF+bRaNSRK/SieGECnQOjSODBEmuEqTUZgJooWP5J7OR/DCy9eILK0ivxw5xre7sYnbwNq7qQkJG2PmRjTRswbufQeoZsZEKevn3dJWNyQ2JIsf56HtXlRaQMRsaG3HPutckA1NoEbz5XlDYU+ofBXWC5ILyS06RZh3ZWHKXsjG11FqBJpZq6lUN6HRk6Q7FGknQW1VtE59GTBOg8ywCojc4O2UmiqbpktEs2g2cvoaunKB3Aki+eQkygzMwwS2k3Zp4BKEUJYPzkKGTdUUC+p1/CY4kP98LGHZJPhmCWTCJNs6qsUwlP5agYzQZqmx+xvDCH6sp7AeOCbSy9pDwUkR8Zhxo8IQWBi4l9mtHYdKhTxajvbaKyWMKbuaeobX3hfpHbx2tjewMrs4+QP3YaA5O3oAaGKaq+9qU4ELIL3f629Jz6bwa1nSrFnYPLKTilZEVY69U1fJp5iK3SrK/+vrY5cPWa2uHB3Zuwd26QA+cTz96tv7vWX/pwp124z+4AQ3Xl6vWY1N1T96aQ6kTaIEJolXD5/ZBwYXD4yiIMjlZ/Ek4fKWuKdMOUniFrg4GwaYEFVj8C8yTaN3H4LD1j9N5WYdJFq6srmJ5+/NeD1UmPkFyeuMaF6SZFDyn6aV+k/aE/wPpMssnDic7XvgswAPDL5dFvy5o6AAAAAElFTkSuQmCC" />
                <span className={Styles.links}>Edit Picture</span>
              </Box>
              <Box className={Styles.activity}>
                <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABEFJREFUeNqMlF1MHFUUx//zsbvsF1B2WbBCoZYABgGlX0GsSUOjVZ81MVFrje+t1ZfGUEmkjSaNvtQnU7GJHzHGEKMoTSpigwmljWiDkCrLLoV2l+4uLCzL7szcueO5swsB0xjv5D83k3vO755z7rkDy7LwX+PMmXfkkatX4z00438M26i3t7f0fot9Z8/tb2trH+vs7KpqpfndvrP772d3+u2eTX9JRDgwMHAtFov9tJrJ/GxxS3O6XI3BQPC51va2Iy0trT5hIxKZnJxcu3nz9yvJZGpQ07S/IMHl8/kPh6qqu19+8fmDm8BYfNEsL98hR6MRjTHGA8FKV0VFwI5+YknDyetJfNARQHuFC5xbSC0leSKR1GRFkWtr61zp5TRvbqhRNoF/z4S1+vrdTlFNEclGRB/fzuDEHylA44Bu4cNHAzjeWApeXLdFz1w0qu9rb3YJoFpIXJJoY+wdvgOHS8ZdbiJpmBSNBLgkYSA88caNJN4cTSBgSXjAIUPXLPzy6i4BljZqqBZLaaeSkyz8mdcBhwBRxqZVgJkkkZBCdmSTyJtIrDDUexSYXOy1ySsARXR2GlLx3MnRhooxOg3cWQZa6oBApc3fkFX041tazwaKkDntxLP0YiSVizIUPKYI2HQE0jJt6KNvSlPUE4xAlIHIzLKN/52ycNZ54QBUFIE0HzgApDXIpV6YBoeHryOkJFHiyEG1KmGwGmy9GzYwvbKih6p3quWU81xOAMWGVgEYpDTHB+HsfhYhFsfrge/whHscTjONaK4G2YXjSKYf1IvF4jYwMhuZaWhsbjv1cBmOjdyjJQubdWaFaZe1gAu7L2KfdwqcrYMbWTS456FFx5GJHV0u88K/kkXGbt7ZSPjCYnyRP13rwXt7KwARpdA6iU5UjLd2DuPx4CJUhwey4oakUpNLJWCmgkbnt3jtKDrIzG0DqdP7h4evfMOoB15q9uNwqIRA3JabGeh4sgWHAnEbJMsuSIoTkqwiYwbxyWjTLU3LRR7bg05C+W3g+ff7WDQy+8rlH7+/IU7tUreEzw/dw7HKMZxvHER/xw+o82tUCqqQrIh7APHIPMuayyeuV/jkMo8LfhGhffWk4qlPfvbQU1ml6WJ1mVbjsFapyhoURUGJrwqq000lZ1S7NTAjA1NfBdMzhW89b/YPsVM9lzCkbv0NhcqVjywerlEpNdE2suLBWo5uw3oOSi4Lj7uEes+AJUTXUyJRIyIc49e+HMGCOMJtQMPkhgodhsaMxZS+lMyHPPPmQW9pWbmcX1/iHhZd7tqT8irQSjjTiMUQvmtOnPvC+mpqDjFCrG4DhqOJ0x4HO5E3FF//ZePrqWg8PDHz22263qsuB9gjDT7/yRd2PLMraHbByvunI/nwp0PGr2PT1i1ynydlttWQhvgFBUmBQmdjWexKEo0r+kf8IrzF9dJiM2dJqaKt/o8AAwBrUhqpGwiGEQAAAABJRU5ErkJggg==" />
                <span className={Styles.links}>Edit Privacy</span>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={Styles.active} style={{border:"1px solid black",marginLeft:"10px"}}>
  <Activity/>
</Box>
      </Box>
    </div>
  );
};

export default Sidebar;
