server_url = 'http://192.168.45.23:8000'

only_url = '192.168.45.23'

import socket
def is_connected():
    try:
        # connect to the host -- tells us if the host is actually
        # reachable
        socket.create_connection(("192.168.45.23", 8000))
        return True
    except OSError:
        pass
    return False
