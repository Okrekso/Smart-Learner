package localdevs.smartlearner.Page_Fragments;

import android.app.Application;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import localdevs.smartlearner.R;

public class Start_Page_Activity extends AppCompatActivity {

    int Counter = 0;

    ImageView img;
    Button back;
    Button next;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start_page);
        img = findViewById(R.id.info_img);
        back = findViewById(R.id.back);
        next = findViewById(R.id.next);
    }

    public void Exit(View v){
        //exit app
        Toast.makeText(
                this, "Close App", Toast.LENGTH_SHORT
        ).show();
    }

    public void Next_Click(View v){
        switch (Counter){
            case 0:{
                img.setImageResource(R.drawable.logopit);
            }break;
            case 1:{
                img.setImageResource(R.drawable.arrow_to_left);
            }break;
            case 2:{
                img.setImageResource(R.drawable.logopit);
                next.setText("Start");
            }break;
            case 3: {
                //loaut next page
                Toast.makeText(
                        this, "Loading...", Toast.LENGTH_SHORT
                ).show();
            }break;
        }
        Counter++;
    }

}
