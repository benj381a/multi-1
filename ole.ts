

//% color="#009ccc" weight=0
namespace ole {
    //% block="Get the newest message send on ole.great-site.net"
    export async function getNewestMessage() {
        var returnResponse = null

        var response = await fetch('http://ole.great-site.net/index.php?getNewestMessage', {
            method: 'POST',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        const responseText = await response.text()
        return responseText || ""
    }

    //% block="Wait for a message to be send on ole.great-site.net"
    export async function waitForMessage() {

    }

    //% block="Send content: $content as user: $username on ole.great-site.net"
    export function SendMessage(username: string, content: string) {

    }
}