import urllib.request, json
import time
import sys

BOT_TOKEN = "8612623191:AAEnIbUvpTsvHyVBW8cMvC2a9OIPH0gEPMM"
WORKER_URL = "https://arrival-lab-bot.tiny-point.workers.dev"

# 1. Delete Webhook to allow polling
url_del = f"https://api.telegram.org/bot{BOT_TOKEN}/deleteWebhook"
try:
    urllib.request.urlopen(url_del)
    print("Deleted webhook to enable polling mode.")
except Exception as e:
    print("Failed to delete webhook:", e)

offset = 0

print("Telegram Bridge proxy started. Polling for updates...")

while True:
    try:
        url_upd = f"https://api.telegram.org/bot{BOT_TOKEN}/getUpdates?offset={offset}&timeout=10"
        res = urllib.request.urlopen(url_upd, timeout=15)
        data = json.loads(res.read().decode())
        
        if not data.get("ok"):
            print("Telegram API error:", data)
            time.sleep(2)
            continue
            
        for update in data.get("result", []):
            offset = update["update_id"] + 1
            print(f"Received update {update['update_id']}. Forwarding to Worker...")
            
            # Forward to Cloudflare Worker
            req = urllib.request.Request(
                WORKER_URL,
                data=json.dumps(update).encode(),
                headers={
                    "Content-Type": "application/json",
                    "User-Agent": "TelegramBot (like TwitterBot)"
                },
                method="POST"
            )
            try:
                w_res = urllib.request.urlopen(req, timeout=10)
                print(f"  Worker response: {w_res.status} {w_res.read().decode().strip()}")
            except Exception as we:
                print(f"  Worker forward failed: {we}")
                
    except Exception as e:
        print("Polling error:", e)
        time.sleep(2)
        
    time.sleep(0.5)
