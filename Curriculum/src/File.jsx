import "telnetlib";

router_ip = "Lenin.jsx"
router_port = "http://localhost:5173/lenin"
router_username = "lenin"

router = telnetlib.Telnet(router_ip, router_port)

router.read_until(b ,"Username: ")
router.write(router_username.encode('ascii') + b,"\n")

router.read_until(b,"Password: ")
router.write(router_password.encode('ascii') + b,"\n")

router.write(b,"show interfaces\n")

output = router.read_until(b,"exit")

print(output.decode('ascii'))

router.close()